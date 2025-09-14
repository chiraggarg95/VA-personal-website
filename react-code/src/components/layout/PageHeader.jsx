import React from "react";
import Container from "./Container";

function PageHeader({ title, subtitle, parallax = false, parallaxClasses = {} }) {
  // parallaxClasses can override default layer classes
  const {
    wrapper = 'parallax-wrapper',
    layer1 = 'parallax-layer parallax-layer-1 parallax-blueprint',
    layer2 = 'parallax-layer parallax-layer-2',
    layer3 = 'parallax-layer parallax-layer-3 parallax-roadmap',
  } = parallaxClasses;

  return (
    <section className={`page-header${parallax ? ` ${wrapper}` : ''}`.trim()}>
      {parallax && (
        <>
          <div className={layer1}></div>
          <div className={layer2}></div>
          <div className={layer3}></div>
        </>
      )}
      <Container>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </Container>
    </section>
  );
}

export default PageHeader;

