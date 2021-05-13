/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
// // import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';

import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';

import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';

import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed.js';

import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';

import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';

import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle.js';
// import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';

import MathType from '@wiris/mathtype-ckeditor5';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
// // import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';

import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';

import TodoList from '@ckeditor/ckeditor5-list/src/todolist';

import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

import Video from '../video/src/video.js';
import VideoStyle from '../video/src/videostyle.js';
import VideoToolbar from '../video/src/videotoolbar.js';
import VideoUpload from '../video/src/videoupload.js';
import VideoResize from '../video/src/videoresize.js';
// import VideoUpload from '@visao/ckeditor5-video/src/videoupload.js';

import Mathematics from 'ckeditor5-math/src/math';

class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	// UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	// // CKFinder,
	// // CloudServices,
	// // EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,

	Alignment,
	Strikethrough,
	Underline,
	Subscript,
	Superscript,

	Code,
	CodeBlock,

	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,

	HorizontalLine,
	HtmlEmbed,
	MediaEmbedToolbar,

	ImageInsert,
	ImageResize,
	IndentBlock,

	LinkImage,
	ListStyle,
	// PageBreak,

	MathType,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,

	TableCellProperties,
	TableProperties,
	TodoList,

	SimpleUploadAdapter,

	Video,
	VideoUpload,
	VideoToolbar,
	VideoStyle,
	VideoResize,

	Mathematics
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'bold',
			'italic',
			'underline',
			'|',
			'alignment',
			'bulletedList',
			'numberedList',
			'|',
			'link',
			'insertTable',
			'videoUpload',
			'imageInsert',
			'mediaEmbed',
			'|',
			'outdent',
			'indent',
			'blockQuote',
			'-',
			'fontBackgroundColor',
			'fontColor',
			'fontSize',
			'fontFamily',
			'|',
			'todoList',
			'strikethrough',
			'subscript',
			'superscript',
			'horizontalLine',

			'|',
			'math',
			'mathType',
			'chemType',
			'specialCharacters',
			'|',
			'code',
			'codeBlock',
			'htmlEmbed',
			'undo',
			'redo',
		],
		// viewportTopOffset: 30,
		// shouldNotGroupWhenFull: true
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'imageTextAlternative',
			'linkImage',
		],
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties',
		],
	},
	mediaEmbed: { previewsInData: true },
	math: {
		engine: 'katex',
		outputType: 'span',
		forceOutputType: false,
		enablePreview: true,
		popupClassName: ['p-3'],
		previewClassName: ['bg-light', 'p-2'],
	},
	video: {
		styles: ['alignLeft', 'alignCenter', 'alignRight'],
		toolbar: [
			'videoStyle:alignLeft',
			'videoStyle:alignCenter',
			'videoStyle:alignRight',
			'|',
			'videoResize:50',
			'videoResize:75',
			'videoResize:original',
		],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
	// mathTypeParameters : {
	// 	serviceProviderProperties : {
	// 		URI : 'http://localhost/demo/math_type',
	// 		server : 'php'
	// 	}
	// }
};
export default ClassicEditor;