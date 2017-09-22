import {installStateLessComponent} from '../utils/PureVueComponent';

var StateLessComponent = require('./StateLessComponent/StateLessComponent.shtml');
import './StateLessComponent/StateLessComponent.less';
import './marked.less';

import './Dialog/Dialog';
import './Dialog/Dialog';
import './Pagination/Pagination';
import './PageLoading/PageLoading';
import './uploader/uploader';
import './TopBannerImage/TopBannerImage';

import './directivesAndFilters/directives';
import './directivesAndFilters/filters';

installStateLessComponent(StateLessComponent);

export default 'ok';