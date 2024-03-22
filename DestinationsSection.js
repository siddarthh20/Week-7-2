// DestinationsSection.js
import React from 'react';

function DestinationsSection() {
  return (
    <section id="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination">
        <img src="https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-compressed.jpg" alt="GOLDEN TEMPLE" />
        <p>Description of Destination 1</p>
      </div>
      <div className="destination">
        <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Taj-Mahal-Agra-feature.jpg" alt="TAJ MAHAL" />
        <p>Description of Destination 2</p>
      </div>
    </section>
  );
}

export default DestinationsSection;
