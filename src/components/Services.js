import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt."
      }
    ]
  };
  render() {
    const services = this.state.services.map((item, index) => {
      return (
        <article key={index} className='service'>
          <span>{item.icon}</span>
          <h6>{item.title}</h6>
          <p>{item.info}</p>
        </article>
      );
    });

    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>{services}</div>
      </section>
    );
  }
}

export default Services;
