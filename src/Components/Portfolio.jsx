/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "Verona";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "LIBFT",
    description:
      "Development of a C library that replicates standard C functions and includes additional custom functions.",
    url: "https://github.com/ricvrdv/libft",
  },
  {
    title: "FT_PRINTF",
    description:
      "Implementation of the printf function in C, requiring advanced knowledge of string formatting, pointer manipulation, and dynamic memory allocation.",
    url: "https://github.com/ricvrdv/ft_printf",
  },
  {
    title: "GET_NEXT_LINE",
    description:
      "Creation of a C function that reads a line from a file efficiently, emphasizing memory management and optimized file reading.",
    url: "https://github.com/ricvrdv/get_next_line",
  },
  {
    title: "BORN2BEROOT",
    description:
      "Configuration of a secure Linux server using tools like LVM, UFW, and SSH. This project covers system administration concepts, user permissions, and security best practices.",
    url: "https://github.com/ricvrdv/Born2beRoot",
  },
  {
    title: "PUSH_SWAP",
    description:
      "Development of a C program that sorts numbers using a limited set of operations, focusing on sorting algorithms and performance optimization.",
    url: "https://github.com/ricvrdv/push_swap",
  }
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
