import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

interface CounterProps {
  endValue: number;
  label: string;
}

const CounterWithVisibilitySensor: React.FC<CounterProps> = ({
  endValue,
  label,
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const onVisibilityChange = (isVisible: boolean) => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <div className="text-center">
      <div className="text-2xl font-bold md:text-4xl">
        <CountUp
          redraw={true}
          end={endValue}
          duration={2}
          preserveValue={true}
          separator=","
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={onVisibilityChange} delayedCall>
              {/* <h3 className="display-5 fw-bold mb-1 text-success">550K+</h3>{" "} */}
              <span
                className="display-5 fw-bold mb-1 text-dark"
                ref={countUpRef}
              />
            </VisibilitySensor>
          )}
        </CountUp>
        <span className="display-5 fw-bold mb-1 text-dark">+</span>
      </div>
      <h6 className="mb-0">{label}</h6>
    </div>
  );
};

export default CounterWithVisibilitySensor;
