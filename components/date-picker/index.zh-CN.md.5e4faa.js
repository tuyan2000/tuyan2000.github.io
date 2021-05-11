(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2573],{83603:function(u){u.exports={content:["section",["p","\u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u63A7\u4EF6\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["p","\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65E5\u671F\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65E5\u671F\u9762\u677F\u8FDB\u884C\u9009\u62E9\u3002"]],meta:{category:"Components",type:"\u6570\u636E\u5F55\u5165",title:"DatePicker",subtitle:"\u65E5\u671F\u9009\u62E9\u6846",cover:"https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg",filename:"components/date-picker/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["p","\u65E5\u671F\u7C7B\u7EC4\u4EF6\u5305\u62EC\u4EE5\u4E0B\u4E94\u79CD\u5F62\u5F0F\u3002"],["ul",["li",["p","DatePicker"]],["li",["p","DatePicker","[",'picker="month"]']],["li",["p","DatePicker","[",'picker="week"]']],["li",["p","DatePicker","[",'picker="year"]']],["li",["p","DatePicker","[",'picker="quarter"] (4.1.0 \u65B0\u589E)']],["li",["p","RangePicker"]]],["h3","\u56FD\u9645\u5316\u914D\u7F6E"],["p","\u9ED8\u8BA4\u914D\u7F6E\u4E3A en-US\uFF0C\u5982\u679C\u4F60\u9700\u8981\u8BBE\u7F6E\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u5904\u4F7F\u7528\u6211\u4EEC\u63D0\u4F9B\u7684\u56FD\u9645\u5316\u7EC4\u4EF6\uFF0C\u8BE6\u89C1\uFF1A",["a",{title:null,href:"https://ant.design/components/config-provider-cn/"},"ConfigProvider \u56FD\u9645\u5316"],"\u3002"],["p","\u5982\u6709\u7279\u6B8A\u9700\u6C42\uFF08\u4EC5\u4FEE\u6539\u5355\u4E00\u7EC4\u4EF6\u7684\u8BED\u8A00\uFF09\uFF0C\u8BF7\u4F7F\u7528 locale \u53C2\u6570\uFF0C\u53C2\u8003\uFF1A",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"\u9ED8\u8BA4\u914D\u7F6E"],"\u3002"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token string">'moment/locale/zh-cn'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">'antd/es/date-picker/locale/zh_CN'</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>`},["code",`import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

<DatePicker locale={locale} />;`]],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// \u9ED8\u8BA4\u8BED\u8A00\u4E3A en-US\uFF0C\u5982\u679C\u4F60\u9700\u8981\u8BBE\u7F6E\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u6587\u4EF6\u5168\u5C40\u8BBE\u7F6E locale</span>
<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">'moment'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'moment/locale/zh-cn'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">'antd/lib/locale/zh_CN'</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">'2015-01-01'</span><span class="token punctuation">,</span> <span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>`},["code",`// \u9ED8\u8BA4\u8BED\u8A00\u4E3A en-US\uFF0C\u5982\u679C\u4F60\u9700\u8981\u8BBE\u7F6E\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u6587\u4EF6\u5168\u5C40\u8BBE\u7F6E locale
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';

<ConfigProvider locale={locale}>
  <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
</ConfigProvider>;`]],["h3","\u5171\u540C\u7684 API"],["p","\u4EE5\u4E0B API \u4E3A DatePicker\u3001 RangePicker \u5171\u4EAB\u7684 API\u3002"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","allowClear"],["td","\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE"],["td","boolean"],["td","true"],["td"]],["tr",["td","autoFocus"],["td","\u81EA\u52A8\u83B7\u53D6\u7126\u70B9"],["td","boolean"],["td","false"],["td"]],["tr",["td","bordered"],["td","\u662F\u5426\u6709\u8FB9\u6846"],["td","boolean"],["td","true"],["td"]],["tr",["td","className"],["td","\u9009\u62E9\u5668 className"],["td","string"],["td","-"],["td"]],["tr",["td","dateRender"],["td","\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9"],["td","function(currentDate: moment, today: moment) => React.ReactNode"],["td","-"],["td"]],["tr",["td","disabled"],["td","\u7981\u7528"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabledDate"],["td","\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F"],["td","(currentDate: moment) => boolean"],["td","-"],["td"]],["tr",["td","dropdownClassName"],["td","\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386 className"],["td","string"],["td","-"],["td"]],["tr",["td","getPopupContainer"],["td","\u5B9A\u4E49\u6D6E\u5C42\u7684\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u4E3A body \u4E0A\u65B0\u5EFA div"],["td","function(trigger)"],["td","-"],["td"]],["tr",["td","inputReadOnly"],["td","\u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u53EA\u8BFB\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u6253\u5F00\u865A\u62DF\u952E\u76D8\uFF09"],["td","boolean"],["td","false"],["td"]],["tr",["td","locale"],["td","\u56FD\u9645\u5316\u914D\u7F6E"],["td","object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"\u9ED8\u8BA4\u914D\u7F6E"]],["td"]],["tr",["td","mode"],["td","\u65E5\u671F\u9762\u677F\u7684\u72B6\u6001\uFF08",["a",{title:null,href:"/docs/react/faq#\u5F53\u6211\u6307\u5B9A\u4E86-DatePicker/RangePicker-\u7684-mode-\u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u540E\u65E0\u6CD5\u9009\u62E9\u5E74\u4EFD/\u6708\u4EFD\uFF1F"},"\u8BBE\u7F6E\u540E\u65E0\u6CD5\u9009\u62E9\u5E74\u4EFD/\u6708\u4EFD\uFF1F"],"\uFF09"],["td",["code","time"]," ","|"," ",["code","date"]," ","|"," ",["code","month"]," ","|"," ",["code","year"]," ","|"," ",["code","decade"]],["td","-"],["td"]],["tr",["td","open"],["td","\u63A7\u5236\u5F39\u5C42\u662F\u5426\u5C55\u5F00"],["td","boolean"],["td","-"],["td"]],["tr",["td","panelRender"],["td","\u81EA\u5B9A\u4E49\u6E32\u67D3\u9762\u677F"],["td","(panelNode) => ReactNode"],["td","-"],["td","4.5.0"]],["tr",["td","picker"],["td","\u8BBE\u7F6E\u9009\u62E9\u5668\u7C7B\u578B"],["td",["code","date"]," ","|"," ",["code","week"]," ","|"," ",["code","month"]," ","|"," ",["code","quarter"]," ","|"," ",["code","year"]],["td",["code","date"]],["td",["code","quarter"],": 4.1.0"]],["tr",["td","placeholder"],["td","\u8F93\u5165\u6846\u63D0\u793A\u6587\u5B57"],["td","string ","|"," ","[","string, string]"],["td","-"],["td"]],["tr",["td","popupStyle"],["td","\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386\u6837\u5F0F"],["td","CSSProperties"],["td","{}"],["td"]],["tr",["td","size"],["td","\u8F93\u5165\u6846\u5927\u5C0F\uFF0C",["code","large"]," \u9AD8\u5EA6\u4E3A 40px\uFF0C",["code","small"]," \u4E3A 24px\uFF0C\u9ED8\u8BA4\u662F 32px"],["td",["code","large"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td","-"],["td"]],["tr",["td","style"],["td","\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u6837\u5F0F"],["td","CSSProperties"],["td","{}"],["td"]],["tr",["td","suffixIcon"],["td","\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","onOpenChange"],["td","\u5F39\u51FA\u65E5\u5386\u548C\u5173\u95ED\u65E5\u5386\u7684\u56DE\u8C03"],["td","function(open)"],["td","-"],["td"]],["tr",["td","onPanelChange"],["td","\u65E5\u5386\u9762\u677F\u5207\u6362\u7684\u56DE\u8C03"],["td","function(value, mode)"],["td","-"],["td"]]]],["h3","\u5171\u540C\u7684\u65B9\u6CD5"],["table",["thead",["tr",["th","\u540D\u79F0"],["th","\u63CF\u8FF0"],["th","\u7248\u672C"]]],["tbody",["tr",["td","blur()"],["td","\u79FB\u9664\u7126\u70B9"],["td"]],["tr",["td","focus()"],["td","\u83B7\u53D6\u7126\u70B9"],["td"]]]],["h3","DatePicker"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","defaultPickerValue"],["td","\u9ED8\u8BA4\u9762\u677F\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","defaultValue"],["td","\u9ED8\u8BA4\u65E5\u671F\uFF0C\u5982\u679C\u5F00\u59CB\u65F6\u95F4\u6216\u7ED3\u675F\u65F6\u95F4\u4E3A ",["code","null"]," \u6216\u8005 ",["code","undefined"],"\uFF0C\u65E5\u671F\u8303\u56F4\u5C06\u662F\u4E00\u4E2A\u5F00\u533A\u95F4"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","disabledTime"],["td","\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4"],["td","function(date)"],["td","-"],["td"]],["tr",["td","format"],["td","\u8BBE\u7F6E\u65E5\u671F\u683C\u5F0F\uFF0C\u4E3A\u6570\u7EC4\u65F6\u652F\u6301\u591A\u683C\u5F0F\u5339\u914D\uFF0C\u5C55\u793A\u4EE5\u7B2C\u4E00\u4E2A\u4E3A\u51C6\u3002\u914D\u7F6E\u53C2\u8003 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"],"\uFF0C\u652F\u6301",["a",{title:null,href:"#components-date-picker-demo-format"},"\u81EA\u5B9A\u4E49\u683C\u5F0F"]],["td","string ","|"," (value: moment) => string ","|"," (string ","|"," (value: moment) => string)","[","]"],["td",["code","YYYY-MM-DD"]],["td"]],["tr",["td","renderExtraFooter"],["td","\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A"],["td","(mode) => React.ReactNode"],["td","-"],["td"]],["tr",["td","showNow"],["td","\u5F53\u8BBE\u5B9A\u4E86 ",["code","showTime"]," \u7684\u65F6\u5019\uFF0C\u9762\u677F\u662F\u5426\u663E\u793A\u201C\u6B64\u523B\u201D\u6309\u94AE"],["td","boolean"],["td","-"],["td","4.4.0"]],["tr",["td","showTime"],["td","\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD"],["td","Object ","|"," boolean"],["td",["a",{title:null,href:"/components/time-picker/#API"},"TimePicker Options"]],["td"]],["tr",["td","showTime.defaultValue"],["td","\u8BBE\u7F6E\u7528\u6237\u9009\u62E9\u65E5\u671F\u65F6\u9ED8\u8BA4\u7684\u65F6\u5206\u79D2\uFF0C",["a",{title:null,href:"#components-date-picker-demo-disabled-date"},"\u4F8B\u5B50"]],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","moment()"],["td"]],["tr",["td","showToday"],["td","\u662F\u5426\u5C55\u793A\u201C\u4ECA\u5929\u201D\u6309\u94AE"],["td","boolean"],["td","true"],["td"]],["tr",["td","value"],["td","\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","onChange"],["td","\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03"],["td","function(date: moment, dateString: string)"],["td","-"],["td"]],["tr",["td","onOk"],["td","\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03"],["td","function()"],["td","-"],["td"]],["tr",["td","onPanelChange"],["td","\u65E5\u671F\u9762\u677F\u53D8\u5316\u65F6\u7684\u56DE\u8C03"],["td","function(value, mode)"],["td","-"],["td"]]]],["h3","DatePicker","[","picker=year]"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","defaultPickerValue"],["td","\u9ED8\u8BA4\u9762\u677F\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","defaultValue"],["td","\u9ED8\u8BA4\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","format"],["td","\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string"],["td",["code","YYYY"]],["td"]],["tr",["td","renderExtraFooter"],["td","\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A"],["td","() => React.ReactNode"],["td","-"],["td"]],["tr",["td","value"],["td","\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","onChange"],["td","\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03\uFF0C\u53D1\u751F\u5728\u7528\u6237\u9009\u62E9\u65F6\u95F4\u65F6"],["td","function(date: moment, dateString: string)"],["td","-"],["td"]]]],["h3","DatePicker","[","picker=quarter]"],["p",["code","4.1.0"]," \u65B0\u589E\u3002"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","defaultPickerValue"],["td","\u9ED8\u8BA4\u9762\u677F\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","defaultValue"],["td","\u9ED8\u8BA4\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","format"],["td","\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string"],["td",["code","YYYY-\\QQ"]],["td"]],["tr",["td","renderExtraFooter"],["td","\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A"],["td","() => React.ReactNode"],["td","-"],["td"]],["tr",["td","value"],["td","\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","onChange"],["td","\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03\uFF0C\u53D1\u751F\u5728\u7528\u6237\u9009\u62E9\u65F6\u95F4\u65F6"],["td","function(date: moment, dateString: string)"],["td","-"],["td"]]]],["h3","DatePicker","[","picker=month]"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","defaultPickerValue"],["td","\u9ED8\u8BA4\u9762\u677F\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","defaultValue"],["td","\u9ED8\u8BA4\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","format"],["td","\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string"],["td",["code","YYYY-MM"]],["td"]],["tr",["td","monthCellRender"],["td","\u81EA\u5B9A\u4E49\u7684\u6708\u4EFD\u5185\u5BB9\u6E32\u67D3\u65B9\u6CD5"],["td","function(date, locale): ReactNode"],["td","-"],["td"]],["tr",["td","renderExtraFooter"],["td","\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A"],["td","() => React.ReactNode"],["td","-"],["td"]],["tr",["td","value"],["td","\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","onChange"],["td","\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03\uFF0C\u53D1\u751F\u5728\u7528\u6237\u9009\u62E9\u65F6\u95F4\u65F6"],["td","function(date: moment, dateString: string)"],["td","-"],["td"]]]],["h3","DatePicker","[","picker=week]"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","defaultPickerValue"],["td","\u9ED8\u8BA4\u9762\u677F\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","defaultValue"],["td","\u9ED8\u8BA4\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","format"],["td","\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string"],["td",["code","YYYY-wo"]],["td"]],["tr",["td","renderExtraFooter"],["td","\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A"],["td","(mode) => React.ReactNode"],["td","-"],["td"]],["tr",["td","value"],["td","\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","onChange"],["td","\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03\uFF0C\u53D1\u751F\u5728\u7528\u6237\u9009\u62E9\u65F6\u95F4\u65F6"],["td","function(date: moment, dateString: string)"],["td","-"],["td"]]]],["h3","RangePicker"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","allowEmpty"],["td","\u5141\u8BB8\u8D77\u59CB\u9879\u90E8\u5206\u4E3A\u7A7A"],["td","[","boolean, boolean]"],["td","[","false, false]"],["td"]],["tr",["td","dateRender"],["td","\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9\u3002",["code","info"]," \u53C2\u6570\u81EA 4.3.0 \u6DFB\u52A0"],["td","function(currentDate: moment, today: moment, info: { range: ",["code","start"]," ","|"," ",["code","end"]," }) => React.ReactNode"],["td","-"],["td"]],["tr",["td","defaultPickerValue"],["td","\u9ED8\u8BA4\u9762\u677F\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","-"],["td"]],["tr",["td","defaultValue"],["td","\u9ED8\u8BA4\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","-"],["td"]],["tr",["td","disabled"],["td","\u7981\u7528\u8D77\u59CB\u9879"],["td","[","boolean, boolean]"],["td","-"],["td"]],["tr",["td","disabledTime"],["td","\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4"],["td","function(date: moment, partial: ",["code","start"]," ","|"," ",["code","end"],")"],["td","-"],["td"]],["tr",["td","format"],["td","\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F"],["td","string"],["td",["code","YYYY-MM-DD HH:mm:ss"]],["td"]],["tr",["td","ranges"],["td","\u9884\u8BBE\u65F6\u95F4\u8303\u56F4\u5FEB\u6377\u9009\u62E9"],["td","{ ","[","range: string]: ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","] } ","|"," { ","[","range: string]: () => ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","] }"],["td","-"],["td"]],["tr",["td","renderExtraFooter"],["td","\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A"],["td","() => React.ReactNode"],["td","-"],["td"]],["tr",["td","separator"],["td","\u8BBE\u7F6E\u5206\u9694\u7B26"],["td","string"],["td",["code","~"]],["td"]],["tr",["td","showTime"],["td","\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD"],["td","Object","|","boolean"],["td",["a",{title:null,href:"/components/time-picker/#API"},"TimePicker Options"]],["td"]],["tr",["td","showTime.defaultValue"],["td","\u8BBE\u7F6E\u7528\u6237\u9009\u62E9\u65E5\u671F\u65F6\u9ED8\u8BA4\u7684\u65F6\u5206\u79D2\uFF0C",["a",{title:null,href:"#components-date-picker-demo-disabled-date"},"\u4F8B\u5B50"]],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","[","moment(), moment()]"],["td"]],["tr",["td","value"],["td","\u65E5\u671F"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","-"],["td"]],["tr",["td","onCalendarChange"],["td","\u5F85\u9009\u65E5\u671F\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03\u3002",["code","info"]," \u53C2\u6570\u81EA 4.4.0 \u6DFB\u52A0"],["td","function(dates: ","[","moment, moment], dateStrings: ","[","string, string], info: { range:",["code","start"],"|",["code","end"]," })"],["td","-"],["td"]],["tr",["td","onChange"],["td","\u65E5\u671F\u8303\u56F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03"],["td","function(dates: ","[","moment, moment], dateStrings: ","[","string, string])"],["td","-"],["td"]]]],["h2","FAQ"],["h3","\u5F53\u6211\u6307\u5B9A\u4E86 DatePicker/RangePicker \u7684 mode \u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u540E\u65E0\u6CD5\u9009\u62E9\u5E74\u4EFD/\u6708\u4EFD\uFF1F"],["p","\u8BF7\u53C2\u8003",["a",{title:null,href:"/docs/react/faq#\u5F53\u6211\u6307\u5B9A\u4E86-DatePicker/RangePicker-\u7684-mode-\u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u540E\u65E0\u6CD5\u9009\u62E9\u5E74\u4EFD/\u6708\u4EFD\uFF1F"},"\u5E38\u89C1\u95EE\u7B54"]],["h3","\u5982\u4F55\u5728 DatePicker \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982 dayjs \uFF09\uFF1F"],["p","\u8BF7\u53C2\u8003",["a",{title:null,href:"/docs/react/replace-moment#DatePicker"},"\u300A\u66FF\u6362 Moment.js\u300B"]],["h3","\u4E3A\u4F55\u5168\u5C40\u4FEE\u6539 moment.locale \u4E0D\u751F\u6548\uFF1F"],["p","v4 \u4E2D\uFF0CDatePicker \u9ED8\u8BA4 ",["code","locale"]," \u4E3A ",["code","en"],"\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 DatePicker \u7684 ",["code","locale"]," \u5C5E\u6027\u6765\u5355\u72EC\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",["a",{title:null,href:"/components/config-provider"},"ConfigProvider ",["code","locale"]]," \u5C5E\u6027\u6765\u914D\u7F6E\u3002"],["h3","\u5982\u4F55\u4FEE\u6539\u5468\u7684\u8D77\u59CB\u65E5\uFF1F"],["p","\u8BF7\u4F7F\u7528\u6B63\u786E\u7684",["a",{title:null,href:"/docs/react/i18n"},"\u8BED\u8A00\u5305"],"\uFF08",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/5605"},"#5605"],"\uFF09\uFF0C\u6216\u8005\u4FEE\u6539 moment \u7684 ",["code","locale"]," \u914D\u7F6E\uFF1A",["a",{title:null,href:"https://codesandbox.io/s/moment-day-of-week-6dby5"},"https://codesandbox.io/s/moment-day-of-week-6dby5"]],["h3","\u4E3A\u4F55\u4F7F\u7528 ",["code","panelRender"]," \u65F6\uFF0C\u539F\u6765\u9762\u677F\u65E0\u6CD5\u5207\u6362\uFF1F"],["p","\u5F53\u4F60\u901A\u8FC7 ",["code","panelRender"]," \u52A8\u6001\u6539\u53D8\u5C42\u7EA7\u7ED3\u6784\u65F6\uFF0C\u4F1A\u4F7F\u5F97\u539F\u672C\u7684 Panel \u88AB\u5F53\u505A\u65B0\u7684\u8282\u70B9\u5220\u9664\u5E76\u521B\u5EFA\u3002\u8FD9\u4F7F\u5F97\u5176\u539F\u672C\u7684\u72B6\u6001\u4F1A\u88AB\u91CD\u7F6E\uFF0C\u4FDD\u6301\u7ED3\u6784\u7A33\u5B9A\u5373\u53EF\u3002\u8BE6\u60C5\u8BF7\u53C2\u8003 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/27263"},"#27263"],"\u3002"],["pre",{lang:"js",highlighted:`moment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'en'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment" spellcheck="true">// \u6CE8\u610F\u8BF7\u4FEE\u6539\u4F60\u6B63\u5728\u4F7F\u7528\u7684 locale \u8BED\u8A00\uFF0C\u6BD4\u5982 zh-cn</span>
  week<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    dow<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`moment.locale('en', {
  // \u6CE8\u610F\u8BF7\u4FEE\u6539\u4F60\u6B63\u5728\u4F7F\u7528\u7684 locale \u8BED\u8A00\uFF0C\u6BD4\u5982 zh-cn
  week: {
    dow: 1,
  },
});`]]]}}}]);
