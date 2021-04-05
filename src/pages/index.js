import React from 'react'
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <div>
        <h1>Tseso's disadvantages</h1>
        <lu>
          <li>Overthinking
            <lu>
              <li>She didn't apply for school senior year in Highschool because she wasn't confident enough. --> not brave enough</li>
            </lu>
          </li>
        </lu>
      </div>
    </div>
  );
}