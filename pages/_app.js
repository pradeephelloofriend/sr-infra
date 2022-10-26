
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../public/css/plugins.css';
import '../public/css/custom.css';
import '../public/css/style.css';
import '../public/css/font.awesome.css'
import "swiper/css/bundle";
import Head from 'next/head';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { wrapper } from '../redux/store';
import { withRouter, Router } from 'next/router'

import SimpleReactLightbox from 'simple-react-lightbox'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import MainLayout from '../components/layout/MainLayout';
import Nav from '../components/header/NavbarComponent';
import TopHeaderAreaComponent from '../components/header/TopHeaderAreaComponent';
import FooterComponent from '../components/footer/FooterComponent';



// export async function getServerSideProps() {
// const serviceAreaData = await fetch(`${process.env.API_PATH}/work_category`,{
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${process.env.JWT_TOKEN}` 
//     }
//   })
// const serData = await serviceAreaData.json() 
// return { props: {serData}}
// }



Router.events.on('routeChangeStart', (url) => {
    //console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
function MyApp({ Component, pageProps, }) {
    // serData
    const store = useStore((state) => state);

    return (
        <PersistGate persistor={store.__persistor} >
            <SimpleReactLightbox>
                <MainLayout>
                    <Head>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
                    <title>S.R. Industries</title>
                    <meta charset="UTF-8" />
                    <meta name="keywords" content="S.R. Steel Industries, Repair, Amicas" />
                        <meta name="author" content="Amicas" />
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                        <meta name="title" content="S.R Industries" />
                        <meta name="description" content="SR Steel industries has in-house manufacturing capabilities for all types of furniture and PEB structures spread across over 1,00,000 sq ft. and showcases their products in 5 
                        showrooms. Their products and services have reached all the western states of India including Gujarat, Maharashtra Goa and Karnataka. "/>
                        <meta name="keywords" content="civil construction;
                        Pre-Engineered Building structures; PEB structures; Pre-Engineered Building; Civil turnkey jobs; Steel Fabrication; Water Pipe line Laying;Interior design;
                         Furniture Supplier; Home Furniture supplier; Office Furniture supplier; Modular Furniture supplier; Medical Furniture supplier; Supermarkets Furniture supplier;
                         Hospital Furniture supplier; Partition & Railing Work; School Furniture supplier; Showrooms; Steel furniture manufacturer; Wooden manufacturer; Fabrication Interiors;
                         Construction works;Labor supply services;"/>
                        <meta name="robots" content="index, follow" />
                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                        <meta name="language" content="English" />
                        <meta name="revisit-after" content="15 days" />

                    </Head>
                   <TopHeaderAreaComponent/>
                    <Nav/>
                    <Component {...pageProps} />
                    
                    <FooterComponent />
                    {/* serData={serData} /> */}
                             
                </MainLayout>
            </SimpleReactLightbox>
            </PersistGate>
                  
    ) 
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps: pageProps };
}
export default withRouter(wrapper.withRedux(MyApp))