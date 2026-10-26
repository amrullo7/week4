import React from 'react'
import img1 from "/public/Screenshot_85.png"
import img2 from "/public/72355892508 1 (3).png";
import img3 from "/public/72355892508 1 (4).png";
import img4 from "/public/72355892508 1 (5).png";
import img5 from "/public/72355892508 1 (6).png";
import img6 from "/public/72355892508 1 (7).png";
import img7 from "/public/72355892508 1 (8).png";

const Services = () => {
  return (
<>
 <div className="w-full bg-black px-6 py-8 font-sans text-white lg:px-16">
      <div className="relative flex w-full flex-col items-center overflow-hidden rounded-[48px] bg-neutral-900 lg:flex-row lg:justify-between">
        <div className="w-full px-8 py-12 lg:w-[62%] lg:px-16 lg:py-20">
          <h2 className="text-3xl font-medium text-neutral-200 lg:text-4xl">
            Our Comprehensive{" "}
            <span className="font-bold text-blue-500">Digital Solutions</span>
          </h2>
 
          <p className="mt-12 text-sm text-neutral-300">
            At Catalyst Analytics, we offer a comprehensive suite of digital
            solutions designed to propel your business to new heights in the
            digital realm. With a team of skilled professionals, cutting-edge
            technologies, and a passion for innovation, we are committed to
            delivering exceptional results for every project we undertake. From
            captivating web design that leaves a lasting impression to seamless
            web development that ensures optimal functionality, we cover every
            aspect of your online presence.
          </p>
        </div>
 
        <img
          src={img1}
          alt="Digital solutions"
          className="h-auto w-[280px] lg:absolute right-0 top-0 h-full w-auto"
        />
      </div>
    </div>
     <div className="w-full bg-black px-6 py-16 font-sans text-white px-10">
      <h2 className="text-center text-3xl font-semibold">Our Services</h2>
      <p className="mx-auto mt-4 w-full text-center text-sm text-white/70 lg:w-[460px]">
        Comprehensive AI, blockchain, and analytics solutions powered by deep
        expertise in machine learning and data engineering
      </p>
 
      <div className="mt-12 grid w-full gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center rounded-3xl bg-neutral-900 px-10 py-10 text-center">
          <img src={img1} className="h-44 w-auto" />
          <h3 className="mt-8 text-lg font-semibold">Machine Learning Solutions</h3>
          <p className="mt-5 text-xs text-white/80">
            Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.
          </p>
          <ul className="mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-3 px-4 text-left text-xs text-white/80">
            <li>Deep learning model development</li>
            <li>Neural network architecture design</li>
            <li>Computer vision solutions</li>
            <li>Natural language processing</li>
            <li>Model optimization and scaling</li>
          </ul>
        </div>
 
        <div className="flex flex-col items-center rounded-3xl bg-neutral-900 px-10 py-10 text-center">
          <img src={img2} className="h-44 w-auto" />
          <h3 className="mt-8 text-lg font-semibold">Blockchain Development</h3>
          <p className="mt-5 text-xs text-white/80">
            End-to-end blockchain solutions from smart contract development to decentralized application architecture.
          </p>
          <ul className="mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-3 px-4 text-left text-xs text-white/80">
            <li>Smart contract development</li>
            <li>DeFi protocol design</li>
            <li>Blockchain integration</li>
            <li>Web3 development</li>
            <li>Token implementation</li>
          </ul>
        </div>
 
        <div className="flex flex-col items-center rounded-3xl bg-neutral-900 px-10 py-10 text-center">
          <img src={img3} className="h-44 w-auto" />
          <h3 className="mt-8 text-lg font-semibold">Algorithmic Trading</h3>
          <p className="mt-5 text-xs text-white/80">
            Advanced trading algorithms and systems leveraging ML for market analysis and automated execution.
          </p>
          <ul className="mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-3 px-4 text-left text-xs text-white/80">
            <li>Trading strategy development</li>
            <li>High-frequency trading systems</li>
            <li>Market analysis algorithms</li>
            <li>Risk management systems</li>
            <li>Performance optimization</li>
          </ul>
        </div>
 
        <div className="flex flex-col items-center rounded-3xl bg-neutral-900 px-10 py-10 text-center">
          <img src={img4} className="h-44 w-auto" />
          <h3 className="mt-8 text-lg font-semibold">Data Engineering</h3>
          <p className="mt-5 text-xs text-white/80">
            Build robust data infrastructure that scales with your business needs using modern data engineering practices.
          </p>
          <ul className="mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-3 px-4 text-left text-xs text-white/80">
            <li>Data pipeline development</li>
            <li>Big data processing</li>
            <li>Database optimization</li>
            <li>ETL workflow design</li>
            <li>Data warehouse architecture</li>
          </ul>
        </div>
 
        <div className="flex flex-col items-center rounded-3xl bg-neutral-900 px-10 py-10 text-center">
          <img src={img5} className="h-44 w-auto" />
          <h3 className="mt-8 text-lg font-semibold">Predictive Analytics</h3>
          <p className="mt-5 text-xs text-white/80">
            Transform your data into actionable insights with our advanced predictive modeling and forecasting solutions.
          </p>
          <ul className="mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-3 px-4 text-left text-xs text-white/80">
            <li>Time series analysis</li>
            <li>Predictive modeling</li>
            <li>Business intelligence</li>
            <li>Statistical analysis</li>
            <li>Data visualization</li>
          </ul>
        </div>
 
        <div className="flex flex-col items-center rounded-3xl bg-neutral-900 px-10 py-10 text-center">
          <img src={img6} className="h-44 w-auto" />
          <h3 className="mt-8 text-lg font-semibold">MLOps ; Infrastructure</h3>
          <p className="mt-5 text-xs text-white/80">
            Enterprise-grade infrastructure for deploying and managing ML models in production environments.
          </p>
          <ul className="mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-3 px-4 text-left text-xs text-white/80">
            <li>CI/CD pipeline setup</li>
            <li>Model deployment automation</li>
            <li>Performance monitoring</li>
            <li>Infrastructure scaling</li>
            <li>DevOps integration</li>
          </ul>
        </div>
 
      </div>
    </div>
</>
  )
}

export default Services