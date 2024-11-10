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
              <h2 className="card-title"><a href="https://milestones-1-2-pink.vercel.app/"></a>Static Resume</h2>
              <h2 className="card-title"><a href="https://milestone-3-taupe.vercel.app/"></a>Dynamic Resume</h2>
              <h2 className="card-title"><a href="https://milestone-4-peach.vercel.app/"></a>Editable Resume</h2>
              <h2 className="card-title"><a href="https://milestones-5-puce.vercel.app/"></a>Shareable Resume</h2>
              <p>
                A static resume built with HTML, CSS, JavaScript, and
                TailwindCSS. It showcases my personal information in a user
                friendly and beautifully designed UI
              </p>
              <div className="card-actions justify-end">
                <a href="" className="btn btn-accent">
                  Visit
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Static Resume Generator</h2>
              <p>
                A static resume generator built with HTML, CSS, JavaScript, and
                TailwindCSS. Users can fill in their information to obtain a fully customized Resume.
              </p>
              <div className="card-actions justify-end">
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
