import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FroalaEditor from 'react-froala-wysiwyg';

import './Editor.css';

class Editor extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  onClickView = () => {
    this.props.toggleView(true);
  }

  onChangeTitle = (event) => {
    this.props.onChangeTitle(event.target.value);
  }

  handleChangeModel = (model) => {
    this.props.onChange(model);
  }

  render() {
    /**
     * Configure for Frola Editor
     * https://www.froala.com/wysiwyg-editor/docs/options#fontFamily
     */
    const config = {
      placeholderText: 'Edit Your Content Here!',
      charCounterCount: false,
      theme: 'custom',
      indentMargin: 10,
      heightMin: 600,
      fontFamily: {
        'Roboto, sans-serif': 'Roboto',
        'Quicksand, sans-serif': 'Quicksand',
        'Nunito, sans-serif': 'Nunito',
        'Open Sans, sans-serif': 'Open Sans',
        'Open Sans Condensed, sans-serif': 'Open Sans Condensed',
        'Arial,Helvetica,sans-serif': 'Arial',
        'Georgia,serif': 'Georgia',
        'Impact,Charcoal,sans-serif': 'Impact',
        'Tahoma,Geneva,sans-serif': 'Tahoma',
        '\'Times New Roman\',Times,serif': 'Times New Roman',
        'Verdana,Geneva,sans-serif': 'Verdana'
      },
      toolbarButtons: [
        'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
        'fontFamily', 'fontSize', 'color', 'paragraphStyle', '|',
        'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote',
        'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|',
        'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|',
        'print', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'
      ]
    };

    const {
      stateModel, show, model, title
    } = this.props;

    return (
      <div className="Editor" style={{ display: show ? 'block' : 'none' }}>

        <div className="header">
          <div className="container-fluid">
            <div className="row">

              <div className="col-12 col-lg-4 col-md-4">
                <span className="logo">
                  <i className="fa fa-file-text-o" />
                </span>
                <span className="title">
                  <input
                    type="text" placeholder="Untitled document" onChange={this.onChangeTitle}
                    value={title}
                  />
                </span>
              </div>

              <div className="col-12 col-lg-4 col-md-4">
                <div className="state">
                  {stateModel}
                </div>
              </div>

              <div className="col-12 col-lg-4 col-md-4">
                <div className="options">
                  <button className="btn">
                    <span><i className="fa fa-html5" />View Page</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FroalaEditor
          tag="textarea"
          model={model}
          config={config}
          onModelChange={this.handleChangeModel}
        />
      </div>
    );
  }
}

Editor.propTypes = {
  model: PropTypes.string,
  show: PropTypes.bool,
  onChange: PropTypes.func,
  toggleView: PropTypes.func,
  onChangeTitle: PropTypes.func,
  stateModel: PropTypes.string.isRequired,
  title: PropTypes.string
};

Editor.defaultProps = {
  model: '',
  show: false,
  title: '',
  onChange: () => { },
  toggleView: () => { },
  onChangeTitle: () => { }
};

export default Editor;
