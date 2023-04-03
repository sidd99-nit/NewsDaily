import React from 'react'

export default function About() {
  return (
    <>
        <div class="accordion container" style={{margin:'100px'}} id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>About NewsDaily</strong>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>NewsDaily</strong> is a website that serves you, your daily dose of top headlines from different sections.
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
