import React, { useState, useEffect } from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import { fetchBlogs } from "@utils/consts";
import Image from "next/image";

export default function Page() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(fetchBlogs, { cache: "force-cache" });
        const data = await res.json();
        setBlogData(data.posts || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("blogData:", blogData);

  const imageUrl = [
    "https://th.bing.com/th/id/OIP.0-dYGJDq118PJ0QaNKws7gHaEK?rs=1&pid=ImgDetMain",
    "https://suryacipta.com/wp-content/uploads/2023/03/2E46D5D1-B091-4A96-82E5-FFC38DA8A16E-1024x587.jpeg",
    "https://www.royalhaskoningdhv.com/-/jssmedia/images/services/maritime/smart-asset-management-h.jpg?mw=1200",
    "https://virtuzone.com/wp-content/uploads/2023/06/profitable-growth-6-1280x845.jpg",
    "https://th.bing.com/th/id/OIP.d0v03UPDV7gd8fUdHMc1AwAAAA?rs=1&pid=ImgDetMain",
  ];

  return (
    <Layout title="Blog" desc="This is blog page">
      <Navbar />
      <PageHeader title="Upcoming Blogs" />
      <section className="masonary-blog-section ptb-60 blog-hero-spc-padding">
        <div className="container">
          {loading ? (
            <div className="container d-flex justify-content-center align-items-center vh-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row">
              {blogData.map((blog, i) => (
                <div key={i + 1} className="col-lg-4 col-md-6">
                  <div className="single-article bg-dark-shade rounded-custom my-3">
                    <div className="article-img">
                      <img
                        width={414}
                        height={224}
                        // src={blog.image}
                        src={imageUrl[i]}
                        alt="article"
                      />
                    </div>

                    <div className="article-content p-4">
                      <div className="article-category mb-2 d-block">
                        <p
                          className={`d-inline-block text-white badge ${blog.class}`}
                        >
                          {blog.category.name}
                        </p>
                      </div>

                      <a>
                        <h2 className="h5 article-title limit-2-line-text text-primary">
                          {blog.title}
                        </h2>
                      </a>

                      <p className="limit-2-line-text text-white">
                        {blog.seo_description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
