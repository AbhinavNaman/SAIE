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
                        src={blog.image}
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
