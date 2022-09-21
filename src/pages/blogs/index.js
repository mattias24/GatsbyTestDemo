import * as React from 'react'
import Counter from './counter'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as classes from '../../styles/index.module.css'

const IndexPage = () => (

<Layout>
<div className={classes.IndexPage}>index
  <div className={classes.Intro}>
  <h1> Hello</h1>
  <p>To cool for school</p>
  </div>

<StaticImage alt='Rävar' src='../../images/10419284-red-fox-in.png' width={1100}/>
<Counter color="green" />
</div>

</Layout>

)

export default IndexPage
    
  

