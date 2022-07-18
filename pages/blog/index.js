/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-empty */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// Components
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import BlogCard from '../../components/blog-card'

// Data
import {blogData} from '../../lib/data'

export default function Blog({preview}) {

    return (
        <Layout preview={preview}>


            {/* Navbar */}
            <section>
                <div className="bg-gray-900">
                   <Navbar />   
                </div>         
            </section>

            {/* Hero */}

            <section className="p-12 lg:p-24 text-white bg-gray-900 h-full">

                <div className="lg:flex">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text leading-relaxed bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                            Car Dealer Blogspace
                        </h1>

                        <p className="mt-4 sm:leading-relaxed sm:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                        </p>

                    </div>
                </div>
            
            </section>

            
            <section>
                <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-3">
                    
                    <div className="lg:col-start-1 lg:col-end-3 p-10 space-y-10">

                        {/* Blog cards */}
                        {
                            blogData.map((blog, i) => 
                                <BlogCard 
                                    name={blog.name}
                                    title={blog.title}
                                    topic={blog.topic}
                                    blurb={blog.blurb}
                                    date={blog.date}
                                    author={blog.author}
                                    imageUrl={blog.imageUrl}
                                    key={i}
                                    />
                            )
                        }


                    </div>  


                    {/* Filter Section  */}
                    <div className="row-start-1 lg:col-start-3 lg:col-end-4 p-6 bg-gray-50 sticky top-0 lg:self-start">

                        <details open={true} className="space-y-6">
                            <summary className="text-2xl font-bold text-center mb-5">Filter Blogs</summary>
                            <div className="flex flex-col">
                                                    
                                <label htmlFor='search' className="font-bold text-xs" autoFocus>SEARCH</label>
                                
                                <input
                                    name="search"
                                    className="h-10 pr-10 pl-2 text-sm placeholder-gray-600 border border-gray-200 rounded-lg focus:z-10"
                                    placeholder="Search Blogs..."
                                    type="text"
                                />
                                                                
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='sort' className="font-bold text-xs">ALL TOPICS</label>
                                <select name="sort" id="sort" className="h-10 pl-2 pr-10 text-sm placeholder-gray-600 border border-gray-200 rounded-lg focus:z-10" onChange={(e) => console.log(e.target.value)}>
                                    <option value="default" defaultValue="Select...">Select...</option>
                                    <option value='aZ'>A to Z</option>
                                    <option value='zA'>Z to A</option>
                                    <option value='ltH'>Newest to Oldest</option>
                                    <option value='htL'>Oldest to Newest</option>
                                </select>       
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='sort' className="font-bold text-xs">SORT BY</label>
                                <select name="sort" id="sort" className="h-10 pl-2 pr-10 text-sm placeholder-gray-600 border border-gray-200 rounded-lg focus:z-10" onChange={(e) => console.log(e.target.value)}>
                                    <option value="default" defaultValue="Select...">Select...</option>
                                    <option value='aZ'>A to Z</option>
                                    <option value='zA'>Z to A</option>
                                    <option value='ltH'>Newest to Oldest</option>
                                    <option value='htL'>Oldest to Newest</option>
                                </select>       
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="start" className="font-bold text-xs">DATE PUBLISHED</label>

                                <input type="date" id="start" name="trip-start"
                                    className="h-10 text-sm pl-2 border border-gray-200 rounded-lg"
                                    value="2018-07-22"
                                    min="2018-01-01" max="2018-12-31"/>
                            </div>

                        </details>

                        
                    </div>
                </div>

            </section>


        </Layout>
    )
}