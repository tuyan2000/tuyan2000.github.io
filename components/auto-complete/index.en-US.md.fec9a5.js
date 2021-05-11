(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1359],{45377:function(t){t.exports={content:["section",["p","Autocomplete function of input field."],["h2","When To Use"],["p","When there is a need for autocomplete functionality."]],meta:{category:"Components",type:"Data Entry",cols:2,title:"AutoComplete",cover:"https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg",filename:"components/auto-complete/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Methods",title:"Methods"},"Methods"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","allowClear"],["td","Show clear button"],["td","boolean"],["td","false"],["td"]],["tr",["td","autoFocus"],["td","If get focus when component mounted"],["td","boolean"],["td","false"],["td"]],["tr",["td","backfill"],["td","If backfill selected item the input when using keyboard"],["td","boolean"],["td","false"],["td"]],["tr",["td","children (for customize input element)"],["td","Customize input element"],["td","HTMLInputElement ","|"," HTMLTextAreaElement ","|"," React.ReactElement","<","InputProps>"],["td","<","Input />"],["td"]],["tr",["td","children (for dataSource)"],["td","Data source to auto complete"],["td","React.ReactElement","<","OptionProps> ","|"," Array","<","React.ReactElement","<","OptionProps>>"],["td","-"],["td"]],["tr",["td","defaultActiveFirstOption"],["td","Whether active first option by default"],["td","boolean"],["td","true"],["td"]],["tr",["td","defaultOpen"],["td","Initial open state of dropdown"],["td","boolean"],["td","-"],["td"]],["tr",["td","defaultValue"],["td","Initial selected option"],["td","string"],["td","-"],["td"]],["tr",["td","disabled"],["td","Whether disabled select"],["td","boolean"],["td","false"],["td"]],["tr",["td","dropdownClassName"],["td","The className of dropdown menu"],["td","string"],["td","-"],["td"]],["tr",["td","dropdownMatchSelectWidth"],["td","Determine whether the dropdown menu and the select input are the same width. Default set ",["code","min-width"]," same as input. Will ignore when value less than select width. ",["code","false"]," will disable virtual scroll"],["td","boolean ","|"," number"],["td","true"],["td"]],["tr",["td","filterOption"],["td","If true, filter options by input, if function, filter options against it. The function will receive two arguments, ",["code","inputValue"]," and ",["code","option"],", if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded"],["td","boolean ","|"," function(inputValue, option)"],["td","true"],["td"]],["tr",["td","notFoundContent"],["td","Specify content to show when no result matches"],["td","string"],["td",["code","Not Found"]],["td"]],["tr",["td","open"],["td","Controlled open state of dropdown"],["td","boolean"],["td","-"],["td"]],["tr",["td","options"],["td","Select options. Will get better perf than jsx definition"],["td","{ label, value }","[","]"],["td","-"],["td"]],["tr",["td","placeholder"],["td","The placeholder of input"],["td","string"],["td","-"],["td"]],["tr",["td","value"],["td","Selected option"],["td","string"],["td","-"],["td"]],["tr",["td","onBlur"],["td","Called when leaving the component"],["td","function()"],["td","-"],["td"]],["tr",["td","onChange"],["td","Called when select an option or input value change, or value of input is changed"],["td","function(value)"],["td","-"],["td"]],["tr",["td","onDropdownVisibleChange"],["td","Call when dropdown open"],["td","function(open)"],["td","-"],["td"]],["tr",["td","onFocus"],["td","Called when entering the component"],["td","function()"],["td","-"],["td"]],["tr",["td","onSearch"],["td","Called when searching items"],["td","function(value)"],["td","-"],["td"]],["tr",["td","onSelect"],["td","Called when a option is selected. param is option's value and option instance"],["td","function(value, option)"],["td","-"],["td"]]]],["h2","Methods"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Version"]]],["tbody",["tr",["td","blur()"],["td","Remove focus"],["td"]],["tr",["td","focus()"],["td","Get focus"],["td"]]]],["h2","FAQ"],["h3","Why doesn't the text composition system work well with onSearch in controlled mode?"],["p","Please use ",["code","onChange"]," to manage control state. ",["code","onSearch"]," is used for searching input which is not same as ",["code","onChange"],". Besides, clicking on the option will not trigger the ",["code","onSearch"]," event."],["p","Related issue: ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/18230"},"#18230"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/17916"},"#17916"]],["h3","Part of api from v3 not available in v4?"],["p","AutoComplete is a Input component support auto complete tips which should not support ",["code","labelInValue"]," prop to modify dispaly value in input. In v3, AutoComplete realization can not handle case that user type match of both ",["code","value"]," & ",["code","label"]," are the same. v4 not longer support ",["code","label"]," as the value input."],["p","Besides, to unique API, ",["code","dataSource"]," replaced with ",["code","options"],":"],["h4","v3"],["pre",{lang:"tsx",highlighted:`dataSource <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'light'</span><span class="token punctuation">,</span> <span class="token string">'bamboo'</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
<span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">or</span>
dataSource <span class="token operator">=</span> <span class="token punctuation">[</span>
  { value<span class="token punctuation">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token string">'Light'</span> }<span class="token punctuation">,</span>
  { value<span class="token punctuation">:</span> <span class="token string">'bamboo'</span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token string">'Bamboo'</span> }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>`},["code",`dataSource = ['light', 'bamboo'];
// or
dataSource = [
  { value: 'light', text: 'Light' },
  { value: 'bamboo', text: 'Bamboo' },
];`]],["h4","v4"],["pre",{lang:"tsx",highlighted:`options <span class="token operator">=</span> <span class="token punctuation">[</span>
  { value<span class="token punctuation">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">'Light'</span> }<span class="token punctuation">,</span>
  { value<span class="token punctuation">:</span> <span class="token string">'bamboo'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">'Bamboo'</span> }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>`},["code",`options = [
  { value: 'light', label: 'Light' },
  { value: 'bamboo', label: 'Bamboo' },
];`]]]}}}]);
