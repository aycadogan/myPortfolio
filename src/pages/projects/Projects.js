import React, { useState } from 'react'
import './Projects.scss'
import homeshop from '../../assets/videos/homeshop.mp4'
import beachblog from '../../assets/videos/beachblog.mp4'
import moderncooking from '../../assets/videos/moderncooking.mp4'
import pisa from '../../assets/videos/pisa.mp4'
import myworkouts from '../../assets/videos/myworkouts.mp4'
import exercise from '../../assets/videos/exercise.mp4'

const Projects = () => {
  const [loadMore, setLoadMore] = useState(false)

  return (
    <div className='full-page' id='project'>
      <h2 className='padding-bottom'>My Projects</h2>
      <div className='projects'>
        <div className='para'>
          <h4 className='text-pink'>HOME SHOP</h4>
          <p>
            An e-commerce application with built on the MERN stack. Admin user
            is admin@test.com and Password:123
          </p>
          <p>
            <strong>Technologies:</strong> JS, React, NodeJS, React Bootstrap,
            CSS, MongoDB, Cloudinary.{' '}
          </p>
        </div>
        <div className='links'>
          <a
            href='https://homeshop2.herokuapp.com/'
            className='button'
            target='_blank'
            rel='noreferrer'
          >
            Visit the site
          </a>
          <a
            href='https://github.com/aycadogan/homeshop'
            className='button'
            target='_blank'
            rel='noreferrer'
          >
            GitHub Codes
          </a>
        </div>
        <div className='videos'>
          <video autoPlay loop muted>
            <source src={homeshop} type='video/mp4' />
          </video>
        </div>
      </div>
      <div className='projects'>
        <div className='para'>
          <h4 className='text-pink'>MY WORKOUTS</h4>
          <p>
            A workout tracker application with built on the MERN stack. User can
            sign up and log into the app and when they do that they can add
            their own workouts, delete old ones.
          </p>
          <p>
            <strong>Technologies:</strong> JS, React, NodeJS, MongoDB, CSS
          </p>
        </div>
        <div className='links'>
          <a
            href='https://my-workouts-app.herokuapp.com/'
            className='button'
            target='_blank'
            rel='noreferrer'
          >
            Visit the site
          </a>
          <a
            href='https://github.com/aycadogan/myWorkouts'
            className='button'
            target='_blank'
            rel='noreferrer'
          >
            GitHub Codes
          </a>
        </div>
        <div className='videos'>
          <video autoPlay loop muted>
            <source src={myworkouts} type='video/mp4' />
          </video>
        </div>
      </div>

      <div className='projects'>
        <div className='para'>
          <h4 className='text-pink'>GYM</h4>
          <p>
            Exercise App with the functionality to choose exercise categories
            and spesific muscle groups. Browsing exercises and exercise
            details.Displaying similar exercises.{' '}
          </p>
          <p>
            <strong>Technologies:</strong> JS, React, Material UI, CSS,
            RapidAPI.{' '}
          </p>
        </div>
        <div className='links'>
          <a
            href='https://polite-mousse-63c9e9.netlify.app/'
            className='button'
            target='_blank'
            rel='noreferrer'
          >
            Visit the site
          </a>
          <a
            href='https://github.com/aycadogan/FitnessExercises'
            className='button'
            target='_blank'
            rel='noreferrer'
          >
            GitHub Codes
          </a>
        </div>
        <div className='videos'>
          <video autoPlay loop muted>
            <source src={exercise} type='video/mp4' />
          </video>
        </div>
      </div>

      <div className='projects'>
        <div className='para'>
          <h4 className='text-pink'>BEACH BLOG</h4>
          <p>
            A blog project with NodeJS backend.You can post blogs,edit
            blogs,delete blogs.{' '}
          </p>
          <p>
            <strong>Technologies:</strong> JS, MongoDB, NodeJS, Bootstrap, CSS.{' '}
          </p>
        </div>
        <div className='links'>
          <a
            href='https://beachblog.herokuapp.com/'
            className='button'
            target='_blank'
            rel='noreferrer'
          >
            Visit the site
          </a>
          <a
            href='https://github.com/aycadogan/BeachBlog'
            className='button'
            target='_blank'
            rel='noreferrer'
          >
            GitHub Codes
          </a>
        </div>
        <div className='videos'>
          <video autoPlay loop muted>
            <source src={beachblog} type='video/mp4' />
          </video>
        </div>
      </div>
      {loadMore ? (
        ''
      ) : (
        <button onClick={() => setLoadMore(true)} className='button load-more'>
          Load more projects
        </button>
      )}
      {loadMore ? (
        <div>
          <div className='projects'>
            <div className='para'>
              <h4 className='text-pink'>MODERN COOKING</h4>
              <p>
                A recipe list project with Firebase backend. You can post
                recipes, delete recipes and search for recipes.
              </p>
              <p>
                <strong>Technologies:</strong> JS, React, CSS, Firebase
              </p>
            </div>

            <div className='links'>
              <a
                href='https://modern-cooking-58359.web.app/'
                className='button'
                target='_blank'
                rel='noreferrer'
              >
                Visit the site
              </a>
              <a
                href='https://github.com/aycadogan/ModernCooking'
                className='button'
                target='_blank'
                rel='noreferrer'
              >
                GitHub Codes
              </a>
            </div>

            <div className='videos'>
              <video autoPlay loop muted>
                <source src={moderncooking} type='video/mp4' />
              </video>
            </div>
          </div>
          <div className='projects'>
            <div className='para'>
              <h4 className='text-pink'>PISA</h4>
              <p>
                A group project created for education consultant agency as an
                internship project.
              </p>
              <p>
                <strong>Technologies:</strong> HTML, CSS, Javascript
              </p>
            </div>
            <div className='links'>
              <a
                href='https://affectionate-heisenberg-b3ba81.netlify.app/'
                className='button'
                target='_blank'
                rel='noreferrer'
              >
                Visit the site
              </a>
              <a
                href='https://github.com/aycadogan/pisa'
                className='button'
                target='_blank'
                rel='noreferrer'
              >
                GitHub Codes
              </a>
            </div>
            <div className='videos'>
              <video autoPlay loop muted>
                <source src={pisa} type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Projects
