import React from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import muddy from '../assets/muddyWater_poster.jpg';
import woody from '../assets/woodieGuthrie_poster.jpg';
import folkFest from '../assets/folkFestival_poster.jpg';
import dylan from '../assets/dylan_poster.jpg';
import monroe from '../assets/billMonroe_WSM_add.jpg';
import docMerle from '../assets/doc_and_merle_watson.jpg';
import cotten from '../assets/elizabethCotten.jpg';
import mitchell from '../assets/joniMitchell.jpg';
import baez from '../assets/joanBaez.jpg';
import jHurt from '../assets/mississippiJohnHurt.jpg';

export default function Resources() {
  return (
    <>
      <div className="d-flex">
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
        <Container className="mt-3">
          <Row>
            <Col><Image src={muddy} width="200" height="200" /></Col>
            <Col />
            <Col><Image src={cotten} width="200" height="200" /></Col>
            <Col />
            <Col><Image src={folkFest} width="200" height="200" /></Col>
            <Col />
          </Row>
          <Row>
            <Col />
            <Col><Image src={woody} width="200" height="200" /></Col>
            <Col />
            <Col><Image src={jHurt} width="200" height="200" /> </Col>
            <Col />
            <Col />
          </Row>
          <Row>
            <Col><Image src={baez} width="200" height="200" /></Col>
            <Col />
            <Col><Image src={dylan} width="200" height="200" /></Col>
            <Col />
            <Col><Image src={mitchell} width="200" height="200" /></Col>
            <Col />
          </Row>
          <Row>
            <Col />
            <Col><Image src={monroe} width="200" height="200" /></Col>
            <Col />
            <Col><Image src={docMerle} width="200" height="200" /></Col>
            <Col />
            <Col />
          </Row>
        </Container>
        {/* <div className="mt-3 d-flex flex-wrap gap-4">
          <Image src={muddy} width="200" height="200" />
          <Image src={dylan} width="200" height="200" />
          <Image src={folkFest} width="200" height="200" />
          <Image src={woody} width="200" height="200" />
          <Image src={monroe} width="200" height="200" />
          <Image src={docMerle} width="200" height="200" />
          <Image src={cotten} width="200" height="200" />
          <Image src={mitchell} width="200" height="200" />
          <Image src={baez} width="200" height="200" />
        </div> */}
      </div>
    </>
  );
}
