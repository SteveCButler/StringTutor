import React from 'react';

export default function Resources() {
  return (
    <>
      <div className="text-white m-5">
        <h1>Resources</h1>
        <ul className="mt-3">
          <li>
            <a href="https://www.si.edu/spotlight/american-folk-music" target="_blank" rel="noreferrer">Smithsonian - American Folk Music Folkways</a>
          </li>
        </ul>
        <h4 className="mt-5">Recommended Listening</h4>
        <div className="mt-3">
          <ul className="mt-3">
            <li>
              <a href="https://folkways.si.edu/" target="_blank" rel="noreferrer">Smithsonian Folkways</a>
            </li>
          </ul>
        </div>
        <h4 className="mt-5">Tools</h4>
        <ul className="mt-3">
          <li>
            <a href="https://www.fender.com/online-guitar-tuner" target="_blank" rel="noreferrer">Online Tuner</a>
          </li>
          <li>
            <a href="https://www.metronomeonline.com/" target="_blank" rel="noreferrer">Online Metronome</a>
          </li>

        </ul>
      </div>
    </>
  );
}
