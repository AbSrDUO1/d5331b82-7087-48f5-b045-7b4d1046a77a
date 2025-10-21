"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [{"id":"hero-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/tmp/delicious-pizza-1761066631051-1b33f36a.jpg","alt":"delicious pizza"},{"id":"about-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/tmp/pizza-shop-interior-1761066636608-4d648d58.jpg","alt":"pizza shop interior"},{"id":"feature-1","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/tmp/fresh-ingredients-1761066640042-e1d6e42f.jpg","alt":"fresh ingredients"},{"id":"feature-2","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/tmp/family-friendly-1761066643722-e910abd3.jpg","alt":"family friendly"},{"id":"feature-3","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/tmp/quick-service-1761066646778-cc1fc879.jpg","alt":"quick service"},{"id":"product-1","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/tmp/margherita-pizza-1761066649533-c4f86c0c.jpg","alt":"margherita pizza"},{"id":"product-2","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/tmp/pepperoni-pizza-1761066652517-5556b796.jpg","alt":"pepperoni pizza"},{"id":"product-3","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/tmp/vegetarian-pizza-1761066655640-307bbcea.jpg","alt":"vegetarian pizza"},{"id":"testimonial-1","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/tmp/happy-customer-1761066658627-ec30bfba.jpg","alt":"happy customer"},{"id":"testimonial-2","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/tmp/satisfied-family-1761066661471-4be042bc.jpg","alt":"satisfied family"},{"id":"testimonial-3","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/tmp/pizza-lovers-group-1761066664818-787e634c.jpg","alt":"pizza lovers group"},{"id":"testimonial-4","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/tmp/pizza-chef-1761066667829-ac6e7999.jpg","alt":"pizza chef"}];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay 
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Pizza Delight"
          button={{ text: "Order Now", href: "menu" }}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Welcome to Pizza Delight"
          description="Your favorite spot for delicious, authentic pizza. Order now and indulge in the best taste"
          buttons={[
            { text: "Explore Menu", href: "menu" },
            { text: "Contact Us", href: "contact" }
          ]}
          imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
          imageAlt={assetMap.find(a => a.id === "hero-image")?.alt}
        />
      </div>
      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Pizza Delight"
          description={["At Pizza Delight, we believe in quality ingredients and exceptional service.", "Join us for a memorable dining experience."]}
          buttons={[{ text: "Learn More", href: "about" }]}
          imageSrc={assetMap.find(a => a.id === "about-image")?.url}
          imageAlt={assetMap.find(a => a.id === "about-image")?.alt}
        />
      </div>
      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Our Features"
          description="Discover the qualities that set us apart from others."
          features={[
            {
              title: "Fresh Ingredients",
              description: "We use only the freshest ingredients for a superior taste.",
              icon: "Leaf"
            },
            {
              title: "Family Friendly",
              description: "A warm, welcoming environment for all customers.",
              icon: "Coffee"
            },
            {
              title: "Quick Service",
              description: "Experience our fast service and enjoy your pizza sooner.",
              icon: "Clock"
            }
          ]}
        />
      </div>
      <div id="product" data-section="product">
        <ProductCardOne
          title="Popular Pizzas"
          description="Explore our most beloved pizza choices."
          products={[
            {
              id: "1",
              name: "Margherita Pizza",
              price: "$12.99",
              imageSrc: assetMap.find(a => a.id === "product-1")?.url
            },
            {
              id: "2",
              name: "Pepperoni Pizza",
              price: "$14.99",
              imageSrc: assetMap.find(a => a.id === "product-2")?.url
            },
            {
              id: "3",
              name: "Vegetarian Pizza",
              price: "$13.99",
              imageSrc: assetMap.find(a => a.id === "product-3")?.url
            }
          ]}
        />
      </div>
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from our satisfied customers."
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Food Critic",
              company: "Gourmet Reviews",
              rating: 5,
              imageSrc: assetMap.find(a => a.id === "testimonial-1")?.url
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Food Blogger",
              company: "Taste Reviews",
              rating: 5,
              imageSrc: assetMap.find(a => a.id === "testimonial-2")?.url
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Local Guide",
              company: "Foodie's Choice",
              rating: 5,
              imageSrc: assetMap.find(a => a.id === "testimonial-3")?.url
            },
            {
              id: "4",
              name: "David Kim",
              role: "Chef",
              company: "Culinary Stars",
              rating: 5,
              imageSrc: assetMap.find(a => a.id === "testimonial-4")?.url
            }
          ]}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Updated with Our Latest News"
          description="Subscribe to our newsletter for updates and exclusive content."
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Home", href: "home" },
                { label: "Menu", href: "menu" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "policy" },
                { label: "Terms and Conditions", href: "terms" }
              ]
            }
          ]}
          copyrightText="© 2025 Pizza Delight"
        />
      </div>
    </ThemeProvider>
  );
}
