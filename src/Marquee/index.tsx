/*
 * @Author: wj.jiang
 * @Date: 2023-06-26 16:22:48
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-06-27 15:30:05
 */
import clsx from 'clsx';
import React, {
  Children,
  CSSProperties,
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, { keyframes } from 'styled-components';
import './index.less';

interface IMarquee {
  className?: string;
  data?: any[];
  children: ReactNode;
  direction?: 'x' | 'y';
  duration?: number;
  style?: CSSProperties;
}

const marqueeX = keyframes`
    100% {
        transform: translateX(-50%)
    }
     /* 0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    } */
`;
const marqueeY = keyframes`
    100% {
        transform: translateY(-50%)
    }
`;
const MarqueeContent = styled.div`
  display: flex;
  width: 'auto';
  flex-direction: ${(props: any) =>
    props.direction === 'x' ? 'row' : 'column'};
  animation-name: ${(props: any) =>
    props.direction === 'x' ? marqueeX : marqueeY};
  animation-duration: ${(props: any) =>
    (props.move ? props.duration : 0) + 's'};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: 0.3s;
`;

const Marquee = (props: IMarquee) => {
  const { className, children, direction = 'x', duration = 20, style } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [contentWidth, setContentWidth] = useState<number>(0);
  const [move, setMove] = useState<boolean>(false);

  const calcWidth = () => {
    if (containerRef.current && contentRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      let containerWidth = 0;
      let contentWidth = 0;
      if (direction === 'x') {
        containerWidth = containerRect.width;
        contentWidth = contentRect.width;
      }
      if (direction === 'y') {
        containerWidth = containerRect.height;
        contentWidth = contentRect.height;
      }
      //   console.log(containerWidth, contentWidth);
      setMove(!!(containerWidth < contentWidth));
      setContainerWidth(containerWidth);
      setContentWidth(contentWidth);
    }
  };

  useEffect(() => {
    calcWidth();
  }, [children]);

  const multipChild = useCallback(() => {
    return move ? (
      <Fragment>
        {Children.map(children, (child) => {
          return <div className="bubble-marquee-content-item">{child}</div>;
        })}
      </Fragment>
    ) : null;
  }, [children, move, contentWidth, containerWidth]);

  const styleProps = { direction, duration, move };

  return (
    <div
      className={clsx('bubble-marquee', className)}
      ref={containerRef}
      style={style}
    >
      <MarqueeContent
        className="bubble-marquee-content"
        // direction={direction}
        // duration={duration}
        // move={move}
        ref={contentRef}
        {...styleProps}
      >
        {Children.map(children, (child) => {
          return <div className="bubble-marquee-content-item">{child}</div>;
        })}
        {multipChild()}
      </MarqueeContent>
      {/* <MarqueeContent
            className="bubble-marquee-content"
            direction={direction}
            duration={duration}
            move={move}
          >
            {multipChild()}
          </MarqueeContent> */}
      {/* <div className="slider-shadow slider-left"></div>
          <div className="slider-shadow slider-left"></div> */}
    </div>
  );
};

export default Marquee;
