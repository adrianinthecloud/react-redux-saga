import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';
import { loadProducts } from '../../redux/actions';

class Header extends Component {
	constructor() {
		super();

		this.state = {
			title: 'Redux Saga Demo --- Adrian LIU\'s Production',
			keyword: ''
		}
	}

	handleKeywordChange = (event) => {
		this.setState({keyword:event.target.value});
	}

	handleSubmit = () => {
		this.props.dispatch(loadProducts({page:1,keyword:this.state.keyword}));
	};

	render() {
		return (
			<nav className="navbar justify-content-sm-between bg-dark navbar-dark">
				<a className="navbar-brand">{this.state.title}</a>
				<div className="form-inline mb-expand">
					<input className="form-control mr-sm-2 mb-expand" onChange={this.handleKeywordChange} placeholder="e.g. Nike, adidas" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0 mb-expand" onClick={this.handleSubmit} type="submit">Search</button>
				</div>
			</nav>
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

Header.protoTypes = {
	dispatch: PropTypes.func
}

export default connect(mapStateToProps)(Header);