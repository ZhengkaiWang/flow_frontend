import React from 'react'

class EditorText extends React.Component {

	handleChange = (event) => {
		this.props.method.handleTextChange(event.target.value)
	}
  

	render() {
		return <div >
			<textarea 
				value={this.props.data.text} 
				onChange={this.handleChange}
			/>
		</div>;
	}
}

export default EditorText