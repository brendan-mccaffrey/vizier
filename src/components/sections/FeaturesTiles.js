import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
}) => {

    const outerClasses = classNames(
        'features-tiles section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-tiles-inner section-inner pt-0',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap center-content',
        pushLeft && 'push-left'
    );

    // ##############
    // SECTION HEADER
    // ##############

    const sectionHeader = {
        title: 'Web3 Development Consulting',
        paragraph: 'We assist smart contract protocols in the design, development, and delivery of cutting-edge decentralized applications'
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={tilesClasses}>

                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-01.svg')}
                                            alt="Features tile icon 01"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        World-Class UX
                                    </h4>
                                    <p className="m-0 text-sm">
                                        We design digital experiences so seamless, your grandmother can use it.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-02.svg')}
                                            alt="Features tile icon 02"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Premier Functionality
                                    </h4>
                                    <p className="m-0 text-sm">
                                        We leverage years of smart contract development experience to develop efficient implementations of complex logic.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-03.svg')}
                                            alt="Features tile icon 03"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Supersonic Pace
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Our devs' fingers operate at Mach 5, because time is money and our money is ultrasound.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 
                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-04.svg')}
                                            alt="Features tile icon 04"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Robust Workflow
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-05.svg')}
                                            alt="Features tile icon 05"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Robust Workflow
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-06.svg')}
                                            alt="Features tile icon 06"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Robust Workflow
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                    </p>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;