import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadProducts } from '../../redux/actions';
import Product from './product/product';
import img from './loading.gif';

class Products extends Component {
	componentDidMount() {
		this.props.dispatch(loadProducts({page:1,keyword:'nike'}));
	}

	render() {
		const products = ({products}) => {
			if (products) {
				return products.map((item)=>{
					return (
						<Product product={item} key={item.id}/>
					)
				})
			}
		}

		if (this.props.loading) {
           	return <div style={{margin:'120px auto', textAlign:'center'}}><img src={img} /></div>
       	}

		if (this.props.error) {
			return (
				<div style={{color:'red',margin:'150px auto',textAlign:'center'}}>
					Oops: {this.props.error} <br />
					Contact Adrian through <b style={{color:'blue'}}>adrian.liu.work@gmail.com</b> for futher information.
				</div>
			)
		}

		const productWrapper = {
			marginTop: '10px',
			flexFlow: 'row wrap',
			boxSizing: 'border-box',
			justifyContent: 'space-even',
			display: 'flex'
		}

		return (
			<div style={productWrapper}>
				{products(this.props)}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		products: state.products.productList,
		loading: state.products.loading,
		error: state.products.error
	}
}

Products.protoTypes ={
    dispatch: PropTypes.func
}

export default connect(mapStateToProps)(Products);