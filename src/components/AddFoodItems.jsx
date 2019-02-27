import React, { Component } from 'react';

export default class Home extends Component {
    render() {
      return (
      <section>
				<div class="container">
					<div id="wrapper">
					<h1>Enter Food Item details</h1>
						<div class="register">
							<p><input class="reg-control" placeholder="Food Name" type="text" name=""/></p>
							<p><input class="reg-control" placeholder="price" type="number" name=""/></p>
							<p><input class="reg-control" placeholder="Quantity/portions Available" type="number" name=""/></p>
							<p><textarea name=""  placeholder="Description" cols="42" rows="5"></textarea></p>
							<p><input class="reg-control" type="file" name="pic" accept="image/*"/></p>
							<p><input class="button" type="button" name="" value="Submit"/></p>
						</div>
					</div>
				</div>
			</section>
      )
    }
  }