import React, { useState } from 'react'
import FormField from '../components/FormField'
import Loader from '../components/Loader'

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <h2 className="mt-5 font-bold text-[#336A86] text-xl uppercase">{title}</h2>
  );
};


const Home = () => {
  const [loading, setLoading] = useState(false)
  const [allPosts, setAllPosts] = useState(null)

  const [searchText, setSearchText] = useState('')

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px] '>
          Community Art
        </h1>
        <p className='mt-2 text-[#666e75] text-[14px] max-w[500px]'>
          Explore an array of captivating and artistically crafted visuals brought to life by the innovative DALL-E AI, taking you on a journey through a realm of creative wonders.
        </p>
      </div>

      <div className='mt-16'>
        <FormField/>
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-centre items-center'>
            <Loader/>
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className='font-medium text-[#666e75] text-ml mb-3'>
                Showing Results for <span className='text-[#222328]'>{searchText}</span>
              </h2>
            )}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {searchText ? (
                <RenderCards 
                data={[]}
                title="No result found"/>
              ) : 
                <RenderCards
                data={[]}
                title="No posts found"
                />}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Home
