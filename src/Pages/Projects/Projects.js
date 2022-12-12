import React from "react";

const Projects = () => {
  return (
    <div className="mt-10">
      <h1 className="text-5xl font-bold pb-5">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/400/arch" alt="Album" />
          </figure>
          <div className="card-body w-[400px] text-left">
            <h2 className="card-title text-2xl">Education Site</h2>
            <h2 className="card-title">Features</h2>
            <ul className="list-inside list-disc">
              <li>list-1</li>
              <li>list-2</li>
              <li>list-3</li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/400/arch" alt="Album" />
          </figure>
          <div className="card-body w-[400px] text-left">
            <h2 className="card-title text-2xl">Reseller Site</h2>
            <h2 className="card-title">Features</h2>
            <ul className="list-inside list-disc">
              <li>list-1</li>
              <li>list-2</li>
              <li>list-3</li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/400/arch" alt="Album" />
          </figure>
          <div className="card-body w-[400px] text-left">
            <h2 className="card-title text-2xl">Tourist Site</h2>
            <h2 className="card-title">Features</h2>
            <ul className="list-inside list-disc">
              <li>list-1</li>
              <li>list-2</li>
              <li>list-3</li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
