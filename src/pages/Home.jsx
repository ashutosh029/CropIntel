import React from 'react'
import service1 from "../assets/service1.jpg"
import service2 from "../assets/service2.jpg"
import service3 from "../assets/service3.jpg"
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate()
  

  const services = [
    {
      title: 'Soil Analysis',
      description: 'Through advanced soil analysis, we provide detailed insights into the composition and health of your soil, identifying critical factors like nutrient levels, pH balance, and organic content. This data empowers farmers to make informed decisions on crop rotation, fertilizer application, and soil conditioning, ultimately leading to increased crop yields and sustainable farming practices.',
      imageUrl: service1,
    },
    {
      title: 'Weather Forecasting',
      description: 'Our real-time weather forecasting service delivers precise, localized weather data directly to farmers. By predicting temperature changes, precipitation, wind patterns, and potential severe weather, this service helps farmers prepare for seasonal challenges, plan field activities, and take preventative measures to safeguard their crops from unexpected weather conditions. With accurate weather insights, farmers can reduce risks and optimize planting and harvesting schedules.',

      imageUrl: service2,
    },
    {
      title: 'Market Insights',
      description: 'With our market insights service, farmers gain access to up-to-date information on market prices, demand trends, and emerging crop opportunities. This enables them to make strategic decisions about when and where to sell their produce, ensuring they achieve the best possible returns. By staying informed on current and predicted market conditions, farmers can maximize profitability and reduce the likelihood of crop surplus or loss.',

      imageUrl: service3,
    },
  ];

  return (
    <div className="p-4">
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
    <div className="text-2xl font-bold text-green-600">CropIntel</div>
    <ul className="flex items-center space-x-6">
      <li><a href="#about" className="text-gray-800 hover:text-green-600">About</a></li>
      <li><a href="#services" className="text-gray-800 hover:text-green-600">Services</a></li>
      <li><button onClick={() => navigate("/login")} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Login</button></li>
    </ul>
  </nav>
  <section
    id="hero"
    className="w-full rounded-3xl relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white" 
  >
    <div className="bg-black rounded-3xl bg-opacity-50 p-8 w-full h-full flex flex-col justify-center text-center">
      <h1 className="text-5xl font-bold">CropIntel</h1>
      <p className="text-xl mt-4">Our objective is to improve crop yeild while reducing cost, <br />enhancing
        decision making, mitigating risk all in order to have an economic impact
        by increasing quality of life of farmers.</p>
    </div>
  </section>
  <section id="about" className="py-16 px-4 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      CropIntel is dedicated to improving the lives of farmers through innovative technology and data-driven solutions. 
      We strive to make agriculture smarter, sustainable, and more profitable for those who feed the world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse natus excepturi aut ad quia, minus, vero voluptate assumenda, velit eos est molestias minima maxime tempora. Voluptatum sapiente enim vitae suscipit, maiores nulla, praesentium quas saepe deserunt ab eos commodi. Pariatur iste atque nobis ipsum expedita cumque reprehenderit? Totam, tenetur aperiam. Nulla, amet. Non ipsum velit a inventore, eos blanditiis ex excepturi tempora vero. Esse accusamus aliquid in sit neque dolor incidunt. A deserunt enim quibusdam, consequuntur praesentium repellendus voluptates velit tenetur laboriosam placeat officia possimus ut sunt neque hic tempora, aliquid distinctio impedit! Quod distinctio tempora est aliquam ratione nihil sint magnam amet! Amet alias perferendis enim iusto aliquid possimus ab temporibus laborum sed ut ad libero mollitia non sunt, magnam quos facilis numquam velit dignissimos. Dolores debitis deleniti explicabo dolor doloribus libero nulla soluta deserunt eaque nisi, et inventore praesentium dolorem repellat? Culpa eius doloribus nesciunt quibusdam blanditiis asperiores hic veniam temporibus in iste quisquam facilis cum, placeat voluptas doloremque cupiditate ea quis, nam, repudiandae excepturi perspiciatis voluptatibus laboriosam. Obcaecati, repellendus. Ut rerum obcaecati vel qui illo. Id recusandae illo, quo eligendi incidunt quis quae, architecto est necessitatibus rem sapiente obcaecati dolores dignissimos ratione placeat assumenda non doloremque earum!
    </p>
  </section>
  <section id="services" className="py-16 px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
    </div>
  )
}

export default Home