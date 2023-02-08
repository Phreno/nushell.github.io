import{_ as t,p as d,q as r,a1 as e}from"./framework-344bb0e4.js";const s={},o=e('<h1 id="命令形言語から-nu-への対応表" tabindex="-1"><a class="header-anchor" href="#命令形言語から-nu-への対応表" aria-hidden="true">#</a> 命令形言語から Nu への対応表</h1><p>このテーブルは Nu の組込みコマンドやプラグインと他の命令型言語との対応関係を理解することを助けるためのものです。ここでは全ての Nu コマンドとそのコマンドが他の言語でどう使われているかをマッピングしています。コントリビューション歓迎です。</p><p>注: Nu が 0.14.1 以降であることを想定しています。</p><table><thead><tr><th>Nushell</th><th>Python</th><th>Kotlin (Java)</th><th>C++</th><th>Rust</th></tr></thead><tbody><tr><td>alias</td><td></td><td></td><td></td><td></td></tr><tr><td>append</td><td>list.append, set.add</td><td>add</td><td>push_back, emplace_back</td><td>push, push_back</td></tr><tr><td>args</td><td></td><td></td><td></td><td></td></tr><tr><td>autoview</td><td></td><td></td><td></td><td></td></tr><tr><td>average(<code>*</code>)</td><td>statistics.mean</td><td></td><td></td><td></td></tr><tr><td>binaryview(<code>*</code>)</td><td>&quot;{:x}&quot;.format</td><td>Integer.toHexString</td><td></td><td></td></tr><tr><td>calc, = math</td><td>math operators</td><td>math operators</td><td>math operators</td><td>math operators</td></tr><tr><td>cd</td><td></td><td></td><td></td><td></td></tr><tr><td>clear</td><td></td><td></td><td></td><td></td></tr><tr><td>clip</td><td></td><td></td><td></td><td></td></tr><tr><td>compact</td><td></td><td></td><td></td><td></td></tr><tr><td>config</td><td></td><td></td><td></td><td></td></tr><tr><td>count</td><td>len</td><td>size, length</td><td>length</td><td>len</td></tr><tr><td>cp</td><td>shutil.copy</td><td></td><td></td><td></td></tr><tr><td>date</td><td>datetime.date.today</td><td>java.time.LocalDate.now</td><td></td><td></td></tr><tr><td>debug</td><td></td><td></td><td></td><td></td></tr><tr><td>default</td><td></td><td></td><td></td><td></td></tr><tr><td>drop</td><td></td><td></td><td></td><td></td></tr><tr><td>du</td><td>shutil.disk_usage</td><td></td><td></td><td></td></tr><tr><td>each</td><td>for</td><td>for</td><td>for</td><td>for</td></tr><tr><td>echo</td><td>print</td><td>println</td><td>printf</td><td>println!</td></tr><tr><td>enter</td><td></td><td></td><td></td><td></td></tr><tr><td>evaluate_by</td><td></td><td></td><td></td><td></td></tr><tr><td>exit</td><td>exit</td><td>System.exit, kotlin.system.exitProcess</td><td>exit</td><td>exit</td></tr><tr><td>first</td><td>list[0]</td><td>List[0], peek</td><td>vector[0], top</td><td>Vec[0]</td></tr><tr><td>format</td><td>format</td><td>format</td><td>format</td><td>format!</td></tr><tr><td>from</td><td>csv, json, sqlite3</td><td></td><td></td><td></td></tr><tr><td>get</td><td>dict[&quot;key&quot;]</td><td>Map[&quot;key&quot;]</td><td>map[&quot;key&quot;]</td><td>HashMap[&quot;key&quot;], get, entry</td></tr><tr><td>group_by</td><td>itertools.groupby</td><td>groupBy</td><td></td><td>group_by</td></tr><tr><td>headers</td><td></td><td></td><td></td><td></td></tr><tr><td>help</td><td>help</td><td></td><td></td><td></td></tr><tr><td>histogram</td><td></td><td></td><td></td><td></td></tr><tr><td>history</td><td></td><td></td><td></td><td></td></tr><tr><td>http(<code>*</code>)</td><td>urllib.request.urlopen</td><td></td><td></td><td></td></tr><tr><td>inc(<code>*</code>)</td><td>x += 1</td><td>x++</td><td>x++</td><td>x += 1</td></tr><tr><td>insert</td><td>list.insert</td><td></td><td></td><td></td></tr><tr><td>is_empty</td><td>is None</td><td>isEmpty</td><td>empty</td><td>is_empty</td></tr><tr><td>keep</td><td>list[:x]</td><td></td><td></td><td>&amp;Vec[..x]</td></tr><tr><td>keep_until</td><td></td><td></td><td></td><td></td></tr><tr><td>keep_while</td><td>itertools.takewhile</td><td></td><td></td><td></td></tr><tr><td>kill</td><td>os.kill</td><td></td><td></td><td></td></tr><tr><td>last</td><td>list[-1]</td><td></td><td></td><td>&amp;Vec[Vec.len()-1]</td></tr><tr><td>lines</td><td>split, splitlines</td><td>split</td><td>views::split</td><td>split, split_whitespace, rsplit, lines</td></tr><tr><td>ls</td><td>os.listdir</td><td></td><td></td><td></td></tr><tr><td>map_max_by</td><td></td><td></td><td></td><td></td></tr><tr><td>match(<code>*</code>)</td><td>re.findall</td><td>Regex.matches</td><td>regex_match</td><td></td></tr><tr><td>merge</td><td></td><td></td><td></td><td></td></tr><tr><td>mkdir</td><td>os.mkdir</td><td></td><td></td><td></td></tr><tr><td>mv</td><td>shutil.move</td><td></td><td></td><td></td></tr><tr><td>next</td><td></td><td></td><td></td><td></td></tr><tr><td>nth</td><td>list[x]</td><td>List[x]</td><td>vector[x]</td><td>Vec[x]</td></tr><tr><td>open</td><td>open</td><td></td><td></td><td></td></tr><tr><td>parse</td><td></td><td></td><td></td><td></td></tr><tr><td>pivot, =transpose</td><td>zip(*matrix)</td><td></td><td></td><td></td></tr><tr><td>post(<code>*</code>)</td><td>urllib.request.urlopen</td><td></td><td></td><td></td></tr><tr><td>prepend</td><td>deque.appendleft</td><td></td><td></td><td></td></tr><tr><td>prev</td><td></td><td></td><td></td><td></td></tr><tr><td>ps(<code>*</code>)</td><td>os.listdir(&#39;/proc&#39;)</td><td></td><td></td><td></td></tr><tr><td>pwd</td><td>os.getcwd</td><td></td><td></td><td></td></tr><tr><td>range</td><td>range</td><td>.., until, downTo, step</td><td>iota</td><td>..</td></tr><tr><td>reduce_by</td><td>functools.reduce</td><td>reduce</td><td>reduce</td><td>fold, rfold, scan</td></tr><tr><td>reject</td><td></td><td></td><td></td><td></td></tr><tr><td>rename</td><td>shutil.move</td><td></td><td></td><td></td></tr><tr><td>reverse</td><td>reversed, list.reverse</td><td>reverse, reversed, asReversed</td><td>reverse</td><td>rev</td></tr><tr><td>rm</td><td>os.remove</td><td></td><td></td><td></td></tr><tr><td>save</td><td>io.TextIOWrapper.write</td><td></td><td></td><td></td></tr><tr><td>select(<code>***</code>)</td><td>{k:dict[k] for k in keylist}</td><td></td><td></td><td></td></tr><tr><td>shells</td><td></td><td></td><td></td><td></td></tr><tr><td>shuffle</td><td>random.shuffle</td><td></td><td></td><td></td></tr><tr><td>size</td><td>len</td><td></td><td></td><td></td></tr><tr><td>skip</td><td>list[x:]</td><td></td><td></td><td>&amp;Vec[x..]</td></tr><tr><td>skip_until</td><td></td><td></td><td></td><td></td></tr><tr><td>skip_while</td><td>itertools.dropwhile</td><td></td><td></td><td></td></tr><tr><td>sort-by</td><td>sorted, list.sort</td><td>sortedBy, sortedWith, Arrays.sort, Collections.sort</td><td>sort</td><td>sort</td></tr><tr><td>split_by</td><td>str.split{,lines}, re.split</td><td>split</td><td>views::split</td><td>split</td></tr><tr><td>split_column</td><td></td><td></td><td></td><td></td></tr><tr><td>split_row</td><td></td><td></td><td></td><td></td></tr><tr><td>str(<code>*</code>)</td><td>str functions</td><td>String functions</td><td>string functions</td><td>&amp;str, String functions</td></tr><tr><td>sum</td><td>sum</td><td>sum</td><td>reduce</td><td>sum</td></tr><tr><td>sys(<code>*</code>)</td><td>sys</td><td></td><td></td><td></td></tr><tr><td>table</td><td></td><td></td><td></td><td></td></tr><tr><td>tags</td><td></td><td></td><td></td><td></td></tr><tr><td>textview(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>tree(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>to</td><td>csv, json, sqlite3</td><td></td><td></td><td></td></tr><tr><td>touch</td><td>open(path, &#39;a&#39;).close()</td><td></td><td></td><td></td></tr><tr><td>trim</td><td>strip, rstrip, lstrip</td><td>trim, trimStart, trimEnd</td><td>regex</td><td>trim, trim*{start,end}, strip*{suffix,prefix}</td></tr><tr><td>uniq</td><td>set</td><td>Set</td><td>set</td><td>HashSet</td></tr><tr><td>update(<code>**</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>version</td><td>sys.version, sys.version_info</td><td></td><td></td><td></td></tr><tr><td>with_env</td><td>os.environ</td><td></td><td></td><td></td></tr><tr><td>what</td><td></td><td></td><td></td><td></td></tr><tr><td>where</td><td>filter</td><td>filter</td><td>filter</td><td>filter</td></tr><tr><td>which</td><td>shutil.which</td><td></td><td></td><td></td></tr><tr><td>wrap</td><td></td><td></td><td></td><td></td></tr></tbody></table><ul><li><code>*</code> - these commands are part of the standard plugins</li><li><code>**</code> - renamed from <code>edit</code> to <code>update</code> in 0.13.1</li><li><code>***</code> - renamed from <code>pick</code> to <code>select</code> in 0.13.1</li></ul>',5),i=[o];function a(l,c){return d(),r("div",null,i)}const n=t(s,[["render",a],["__file","nushell_map_imperative.html.vue"]]);export{n as default};
