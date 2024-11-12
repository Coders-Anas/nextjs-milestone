import ContentWrapper from "@/components/ContentWrapper";
import PageHeading from "@/components/PageHeading";
import React from "react";

export default function page() {
  return (
    <>
      <ContentWrapper>
        <PageHeading text="Projects" />
        <div id="projects" className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Static Resume</h2>
              <p>
                A static resume built with HTML, CSS, JavaScript, and
                TailwindCSS. It showcases my personal information in a user-friendly and beautifully designed UI.
              </p>
              <div className="project-card__actions">
                <a href="https://hackathon-milestone-liard.vercel.app/" className="btn btn-accent">Visit</a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Static Resume</h2>
              <p>
                A static resume built with HTML, CSS, JavaScript, and
                TailwindCSS. It showcases my personal information in a user-friendly and beautifully designed UI.
              </p>
              <div className="project-card__actions">
                <a href="https://hackathon-milestone-gfd3.vercel.app/" className="btn btn-accent">Visit</a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Static Resume</h2>
              <p>
                A static resume built with HTML, CSS, JavaScript, and
                TailwindCSS. It showcases my personal information in a user-friendly and beautifully designed UI.
              </p>
              <div className="project-card__actions">
                <a href="https://hackathon-milestone-f2xo.vercel.app/" className="btn btn-accent">Visit</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card__body">
              <h2 className="project-card__title">Static Resume Generator</h2>
              <p className="project-card__description">
                A static resume generator built with HTML, CSS, JavaScript, and
                TailwindCSS. Users can fill in their information to obtain a fully customized resume.
              </p>
              <div className="project-card__actions">
                <a href="" className="btn btn-accent">
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}
