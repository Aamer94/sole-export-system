import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';


import AppRouter from './Router';

function App() {
  return (
    
    <div>
            <Helmet>
        <title>Ilsole Export</title>
        <meta name="description" content="Page description" />
        <meta name="keywords" content="
        مصر,egypt,تصدير من مصر ,export from egypt,
        تصدير من مصر الى أي مكان,export from egypt to anywhay,
        مصر,تصدير,استيراد,export,import,
        Fos,fos export,
        Fruits,Fruits export
        ,Frozen Strawbery,Frozen Strawbery export
        ,Frozen Pomogranate,Frozen Pomogranate export,
        سماد,تصدير سماد,تصدير فواكه, تصدير فراولة مجمده
        , تصدير فواكه مجمده, خضراوات,
        تصدير خضراوات , تصدير خضراوات مجمده
         , رمان 
         ,تصدير رمان مجمده ,سبانخ ,بطاطس ,تصدير بطاطس ,
         nuts ,export nuts,phosphate,
         phosphate export,legumes,legumes export,sesames,
         export seesames,spices,export spices,
         fresh vegetables,frozen fruits and vegetables,
         oil and fats,varity of honey,
         coal and firewood,export coal and firewood,
         dried fruits, export dried fruits 

        " />
     
      </Helmet>
      <AppRouter />
     
     
      {/* <NavBar />
      <BgHome />
      <Products />
      <AboutUs /> */}
    </div>
  );
}

export default App;
