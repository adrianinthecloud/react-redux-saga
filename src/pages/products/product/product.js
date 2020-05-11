import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, orange } from '@material-ui/core/colors';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';

import './product.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  sale: {
    backgroundColor: red[500],
	},
	hot: {
		backgroundColor: orange[700]
	}
	
}));

export default function Product({product}) {
  const classes = useStyles();

  const buyNowClick = () => {
    window.open(product.pUrl, "_blank");
  };

	const priceTag = () => {
		if (product.salePrice && product.price != product.salePrice) {
			return (
				<div>
					<span style={{textDecoration:'line-through'}}>RRP: ${product.price}</span>
					<span style={{color:'red'}}> Now: ${product.salePrice}</span>
				</div>
			)
		} else {
			return (
				<div>
					RRP: <span style={{color:'blue'}}>${product.price}</span>
				</div>
			)
		}
	}

  return (
	  <div className="product-card">
		<Card className={classes.root} style={{maxWidth:'100% !important'}}>
		<CardHeader className="product-title"
			avatar={
			<Avatar aria-label="recipe" className={product.salePrice && product.price != product.salePrice ? classes.sale : classes.hot}>
				{product.salePrice && product.price != product.salePrice ? 'Sale' : 'Hot'}
			</Avatar>
			}
			title={product.enName}
			subheader={priceTag()}
		/>
		<CardMedia
			className={classes.media}
			image={product.image}
			title={product.enName}
		/>
		<CardContent className="product-desc-wrap">
			<Typography variant="body2" color="textSecondary" component="p" style={{overflow:'hidden',height:'100%'}}>
			{product.shortDesc}
			</Typography>
		</CardContent>
		<CardActions style={{justifyContent:'center'}} onClick={buyNowClick}>
			<IconButton aria-label="add to shopping cart" style={{color:'#ef6c00'}}>
				<AddShoppingCartIcon />
			</IconButton>
			<Button variant="contained" style={{backgroundColor:'#ef6c00',color:'white'}}>
				Buy It Now
			</Button>
		</CardActions>
		</Card>
	</div>
  );
}