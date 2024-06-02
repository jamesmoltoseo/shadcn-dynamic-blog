import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
// -------- custom component -------- //
import Carousel from 'components/reuseable/Carousel';
import ShareButton from 'components/common/ShareButton';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import BlogCommentList from 'components/common/BlogCommentList';
import { BlogCard1 } from 'components/reuseable/blog-cards';
// -------- data -------- //
const tags = [
  { id: 1, title: 'Still Life', url: '#' },
  { id: 2, title: 'Urban', url: '#' },
  { id: 3, title: 'Nature', url: '#' }
];

const images = [
  { id: 1, url: '/img/photos/b8.jpg', full: '/img/photos/b8-full.jpg' },
  { id: 2, url: '/img/photos/b9.jpg', full: '/img/photos/b9-full.jpg' },
  { id: 3, url: '/img/photos/b10.jpg', full: '/img/photos/b10-full.jpg' },
  { id: 4, url: '/img/photos/b11.jpg', full: '/img/photos/b11-full.jpg' }
];

const blogs = [
  {
    id: 1,
    link: '#',
    category: 'Coding',
    date: '14 Apr 2022',
    image: '/img/photos/b4.jpg',
    title: 'Ligula tristique quis risus',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
  },
  {
    id: 2,
    link: '#',
    date: '14 Apr 2022',
    category: 'Workspace',
    image: '/img/photos/b5.jpg',
    title: 'Nullam id dolor elit id nibh',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
  },
  {
    id: 3,
    link: '#',
    date: '14 Apr 2022',
    category: 'Meeting',
    image: '/img/photos/b6.jpg',
    title: 'Ultricies fusce porta elit',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
  },
  {
    id: 4,
    link: '#',
    date: '14 Apr 2022',
    category: 'Business Tips',
    image: '/img/photos/b7.jpg',
    title: 'Morbi leo risus porta eget',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
  }
];

const BlogDetailsTemplate: FC = () => {
  // used for image lightbox
  useLightBox();

  return (
    <div className="card">
      <FigureImage width={960} height={600} src="/img/photos/b1.jpg" className="card-img-top" />

      <div className="card-body">
        <div className="classic-view">
          <article className="post">
            <div className="post-content mb-5">
              <h2 className="h1 mb-4">Cras mattis consectetur purus fermentum</h2>

              <p>
                Imagine being able to deliver personalized marketing messages to each of your customers, anticipate
                their needs and preferences in real-time, generate high-quality content at scale, and automate customer
                support and lead generation - all with the help of artificial intelligence (AI). It may sound like
                something out of a sci-fi movie, but the truth is, AI is revolutionizing the world of digital marketing
                in ways we never thought possible.
              </p>
              <p>
                As we move further into the age of digital transformation, the use of AI in marketing is becoming more
                widespread and essential to success. In fact, a recent report by MarketsandMarkets predicts that the AI
                in marketing industry will be worth over $40 billion by 2025.
              </p>
              <p>
                So how exactly is AI changing the digital marketing game? Let's take a closer look at some of the key
                ways:
              </p>
              <p>
                Personalisation: By leveraging AI-based algorithms, businesses can now deliver personalized marketing
                messages to customers in real-time. These algorithms analyse data on customer behavior, preferences, and
                interests to deliver tailored content and product recommendations. This approach not only increases
                customer engagement but also boosts conversion rates and customer loyalty.
              </p>
              <p>Predictive Analytics</p>
              <p>
                Predictive analytics helps businesses anticipate customer needs. This means you can run more targeted
                marketing campaigns. AI-based algorithms analyse more customer data than is humanly possible. Businesses
                are able to see patterns and trends as they emerge. Having this kind of information ca give you the
                competitive advantage in your marketing strategies.
              </p>
              <p>Content Creation</p>
              <p>
                Content creation is a time consuming and resource heavy process. With AI, businesses can generate
                high-quality content at scale. From writing articles to creating videos, AI-based tools can create
                bespoke content that is tailored to specific audiences and optimised for search engines.
              </p>
              <p>Chatbots</p>
              <p>
                AI-powered chatbots are becoming increasingly popular in the world of customer support and lead
                generation. Chatbots provide 24/7 customer service, answer frequently asked questions and identify
                potential leads for businesses. By automating these processes, businesses can free up resources and
                focus on other important areas of the business.
              </p>
              <p>
                While the benefits of AI in digital marketing are clear, it's important to consider the ethical
                considerations surrounding its use. From privacy concerns to the potential for perpetuating biases, it's
                essential for businesses to approach AI-powered marketing strategies with caution and consideration.
              </p>
              <p>
                AI is transforming digital marketing in new ways all the time. By leveraging AI-powered tools and
                strategies, businesses can deliver more personalised and effective marketing campaigns, giving them a
                competitive edge in today's digital landscape.
              </p>
              <p>What about the future of search?</p>
              <p>
                Looking towards the future, the role of AI in search is only going to become more important. As search
                engines like Google continue to evolve and improve their algorithms, AI will play a critical role in
                determining search rankings and delivering more relevant results to users.
              </p>
              <p>
                One area where AI is set to have a major impact is in voice search. With the rise of smart home devices
                like Amazon Echo and Google Home, more and more users are using voice commands to search for
                information. AI-powered voice assistants like Siri and Alexa use natural language processing (NLP, not
                to be confused with Neuro-Linguistic Programming!) to understand user queries and deliver accurate
                results. It is safe to predict that voice search SEO will continue growing for businesses looking to
                stay ahead of the curve.
              </p>
              <p>
                AI is set to revolutionise image and video search. With the help of computer vision technology, AI-based
                algorithms can now analyse images and videos to identify objects, people and even emotions! This means
                that businesses can super-optimise their visual content for search engines, allowing them to reach a
                wider audience and drive more traffic to their website.
              </p>
              <p>
                AI will make search more personalised than ever before by analysing user behaviour, interests and
                preferences. AI-based algorithms deliver search results that are tailored to each individual user. This
                level of personalisation not only improves the user experience but also increases the chances of
                conversion and customer loyalty.
              </p>
              <p>
                The future of search will be driven by AI-powered algorithms that can deliver more personalised,
                accurate and efficient results to users. As businesses continue to adapt to this changing landscape,
                it's important to stay up to date with the latest AI-driven tools and strategies to remain competitive
                and deliver the best possible user experience.
              </p>

              <div className="row g-6 mt-3 mb-10">
                {images.map(({ id, url, full }) => (
                  <div key={id} className="col-md-6">
                    <figure className="hover-scale rounded cursor-dark">
                      <a href={full} data-glightbox data-gallery="post">
                        <Image layout="responsive" width={460} height={307} src={url} alt="demo" />
                      </a>
                    </figure>
                  </div>
                ))}
              </div>
              <h3 className="h1 mb-4">Cras mattis consectetur purus fermentum</h3>
              <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero, a pharetra
                augue. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Nullam quis
                risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Praesent commodo
                cursus magna.
              </p>

              <blockquote className="fs-lg my-8">
                <p>
                  Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio sem nec elit purus.
                </p>
                <footer className="blockquote-footer">Very important person</footer>
              </blockquote>

              <h3 className="h2 mb-4">Sit Vulputate Bibendum Purus</h3>

              <p>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet
                fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula
                porta felis euismod semper.
              </p>

              <p>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
                risus. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Nulla
                vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
              </p>
            </div>

            <div className="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
              <div>
                <ul className="list-unstyled tag-list mb-0">
                  {tags.map(({ id, title, url }) => (
                    <li key={id}>
                      <NextLink href={url} title={title} className="btn btn-soft-ash btn-sm rounded-pill mb-0" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-0 mb-md-2">
                <ShareButton btnSize="btn-sm" />
              </div>
            </div>
          </article>
        </div>

        <hr />

        <div className="author-info d-md-flex align-items-center mb-3">
          <div className="d-flex align-items-center">
            <FigureImage
              width={120}
              height={120}
              src="/img/avatars/u5.jpg"
              className="user-avatar rounded-circle overflow-hidden"
            />

            <div>
              <h6>
                <NextLink title="Nikolas Brooten" href="#" className="link-dark" />
              </h6>
              <span className="post-meta fs-15">Sales Manager</span>
            </div>
          </div>

          <div className="mt-3 mt-md-0 ms-auto">
            <Link 
  // legacyBehavior2 passHref2 
href="#">
              <a className="btn btn-sm btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0">
                <i className="uil uil-file-alt" /> All Posts
              </a>
            </Link>
          </div>
        </div>

        <p>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
          risus. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac. Maecenas faucibus mollis interdum.
        </p>

        <SocialLinks className="nav social" />

        <hr />

        <h3 className="mb-6">You Might Also Like</h3>
        <Carousel
          grabCursor
          slidesPerView={2}
          navigation={false}
          breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
        >
          {blogs.map(({ id, ...item }) => (
            <BlogCard1 key={id} {...item} />
          ))}
        </Carousel>

        <hr />

        <div id="comments">
          <h3 className="mb-6">5 Comments</h3>
          <BlogCommentList />
        </div>

        <hr />

        <form className="comment-form">
          <div className="form-floating mb-4">
            <input type="text" className="form-control" placeholder="Name*" id="c-name" />
            <label htmlFor="c-name">Name *</label>
          </div>

          <div className="form-floating mb-4">
            <input type="email" className="form-control" placeholder="Email*" id="c-email" />
            <label htmlFor="c-email">Email*</label>
          </div>

          <div className="form-floating mb-4">
            <input type="text" className="form-control" placeholder="Website" id="c-web" />
            <label htmlFor="c-web">Website</label>
          </div>

          <div className="form-floating mb-4">
            <textarea name="textarea" placeholder="Comment" className="form-control" style={{ height: 150 }} />
            <label>Comment *</label>
          </div>

          <button type="submit" className="btn btn-primary rounded-pill mb-0">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetailsTemplate;
