const mockData = {
  renderedCardOptions: [
    {
      connectionName1: 'Slack',
      accessPermissions1: 'Can preview links<br />Can view, insert and update content',
      transpilerEmail:
        'Transpilers - <span    class="transpile-all-the-things">\nbrian@transpileAllTheThings.js</span>\n',
      imgContent1:
        "url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%27329.8269%20199.8269%2036.3461%2036.3461%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20id%3D%27e5c8f474%27%20x%3D%270%27%20y%3D%270%27%3E%3Cg%20id%3D%27Integrations%20Page%20%28SaaS%20App%29%27%3E%3Cg%20id%3D%27Slack%20logo%27%20clip-path%3D%27url%28%23clip0_10_18%29%27%3E%3Cpath%20id%3D%27path2%27%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M340%20222.674C340%20220.577%20341.586%20218.889%20343.556%20218.889C345.525%20218.889%20347.111%20220.577%20347.111%20222.674V231.992C347.111%20234.089%20345.525%20235.778%20343.556%20235.778C341.586%20235.778%20340%20234.089%20340%20231.992V222.674Z%27%20fill%3D%27%23E01E5A%27%20stroke%3D%27%23E01E5A%27%20stroke-width%3D%270.790123%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%2F%3E%3Cpath%20id%3D%27path4%27%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M352.674%20226C350.577%20226%20348.889%20224.414%20348.889%20222.444C348.889%20220.475%20350.577%20218.889%20352.674%20218.889H361.992C364.089%20218.889%20365.778%20220.475%20365.778%20222.444C365.778%20224.414%20364.089%20226%20361.992%20226H352.674Z%27%20fill%3D%27%23ECB22D%27%20stroke%3D%27%23ECB22D%27%20stroke-width%3D%270.790123%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%2F%3E%3Cpath%20id%3D%27path6%27%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M348.889%20204.008C348.889%20201.911%20350.475%20200.222%20352.444%20200.222C354.414%20200.222%20356%20201.911%20356%20204.008V213.326C356%20215.423%20354.414%20217.111%20352.444%20217.111C350.475%20217.111%20348.889%20215.423%20348.889%20213.326V204.008Z%27%20fill%3D%27%232FB67C%27%20stroke%3D%27%232FB67C%27%20stroke-width%3D%270.790123%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%2F%3E%3Cpath%20id%3D%27path8%27%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M334.008%20217.111C331.911%20217.111%20330.222%20215.525%20330.222%20213.556C330.222%20211.586%20331.911%20210%20334.008%20210H343.326C345.423%20210%20347.111%20211.586%20347.111%20213.556C347.111%20215.525%20345.423%20217.111%20343.326%20217.111H334.008Z%27%20fill%3D%27%2336C5F1%27%20stroke%3D%27%2336C5F1%27%20stroke-width%3D%270.790123%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%2F%3E%3Cg%20id%3D%27g18%27%3E%3Cpath%20id%3D%27path10%27%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M348.889%20232.222C348.888%20232.689%20348.979%20233.152%20349.158%20233.584C349.336%20234.016%20349.598%20234.408%20349.928%20234.739C350.258%20235.069%20350.651%20235.331%20351.083%20235.509C351.514%20235.687%20351.977%20235.779%20352.444%20235.778C354.414%20235.778%20356%20234.192%20356%20232.222C356.001%20231.755%20355.91%20231.292%20355.731%20230.86C355.553%20230.429%20355.291%20230.036%20354.961%20229.706C354.63%20229.375%20354.238%20229.114%20353.806%20228.935C353.374%20228.757%20352.912%20228.666%20352.444%20228.667H348.889V232.222Z%27%20fill%3D%27%23ECB22D%27%20stroke%3D%27%23ECB22D%27%20stroke-width%3D%270.790123%27%20stroke-linecap%3D%27round%27%2F%3E%3Cpath%20id%3D%27path12%27%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M362.222%20217.111H358.667V213.556C358.667%20211.586%20360.252%20210%20362.222%20210C364.192%20210%20365.778%20211.586%20365.778%20213.556C365.778%20215.525%20364.192%20217.111%20362.222%20217.111Z%27%20fill%3D%27%232FB67C%27%20stroke%3D%27%232FB67C%27%20stroke-width%3D%270.790123%27%20stroke-linecap%3D%27round%27%2F%3E%3Cpath%20id%3D%27path14%27%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M333.778%20218.889H337.333V222.444C337.333%20224.414%20335.748%20226%20333.778%20226C333.311%20226.001%20332.848%20225.91%20332.416%20225.731C331.984%20225.553%20331.592%20225.291%20331.261%20224.961C330.931%20224.63%20330.669%20224.238%20330.491%20223.806C330.313%20223.374%20330.221%20222.912%20330.222%20222.444C330.222%20220.475%20331.808%20218.889%20333.778%20218.889Z%27%20fill%3D%27%23E01E5A%27%20stroke%3D%27%23E01E5A%27%20stroke-width%3D%270.790123%27%20stroke-linecap%3D%27round%27%2F%3E%3Cpath%20id%3D%27path16%27%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M347.111%20203.778V207.333H343.556C343.088%20207.334%20342.626%20207.243%20342.194%20207.065C341.762%20206.886%20341.37%20206.625%20341.039%20206.294C340.709%20205.964%20340.447%20205.571%20340.269%20205.14C340.09%20204.708%20339.999%20204.245%20340%20203.778C340%20201.808%20341.586%20200.222%20343.556%20200.222C344.023%20200.221%20344.486%20200.313%20344.917%20200.491C345.349%20200.669%20345.742%20200.931%20346.072%20201.261C346.402%20201.592%20346.664%20201.984%20346.842%20202.416C347.021%20202.848%20347.112%20203.311%20347.111%20203.778Z%27%20fill%3D%27%2336C5F1%27%20stroke%3D%27%2336C5F1%27%20stroke-width%3D%270.790123%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%27clip0_10_18%27%3E%3Crect%20width%3D%2736%27%20height%3D%2736%27%20fill%3D%27white%27%20transform%3D%27translate%28330%20200%29%27%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')"
    },
    {
      connectionName1: 'Jira',
      accessPermissions1: 'Can preview links<br />Can view  content',
      transpilerEmail:
        'Transpilers - <span    class="transpile-all-the-things">\nadmin@</span>\n<span    class="transpile-all-the-things">\ntranspileAllTheThings.js</span>\n',
      imgContent1:
        "url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%27329.0650%20288.5200%2037.4350%2039.0801%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20id%3D%2770962782%27%20x%3D%270%27%20y%3D%270%27%3E%3Cg%20id%3D%27Integrations%20Page%20%28SaaS%20App%29%27%3E%3Cg%20id%3D%27Icon%2023%27%3E%3Cpath%20id%3D%27Vector_23%27%20d%3D%27M365.559%20307.005L349.351%20290.797L347.78%20289.227L335.579%20301.428L330%20307.005C329.721%20307.286%20329.565%20307.665%20329.565%20308.06C329.565%20308.455%20329.721%20308.834%20330%20309.114L341.147%20320.261L347.78%20326.893L359.98%20314.692L360.17%20314.503L365.559%20309.122C365.699%20308.984%20365.81%20308.819%20365.885%20308.637C365.961%20308.456%20366%20308.261%20366%20308.064C366%20307.867%20365.961%20307.672%20365.885%20307.491C365.81%20307.309%20365.699%20307.144%20365.559%20307.005ZM347.78%20313.629L342.211%20308.06L347.78%20302.491L353.348%20308.06L347.78%20313.629Z%27%20fill%3D%27%232684FF%27%2F%3E%3Cpath%20id%3D%27Vector_24%27%20d%3D%27M347.78%20302.49C346.029%20300.739%20345.042%20298.366%20345.034%20295.89C345.026%20293.413%20345.999%20291.034%20347.74%20289.272L335.554%20301.453L342.186%20308.085L347.78%20302.49Z%27%20fill%3D%27url%28%23paint0_linear_10_18%29%27%2F%3E%3Cpath%20id%3D%27Vector_25%27%20d%3D%27M353.363%20308.045L347.781%20313.629C349.539%20315.388%20350.526%20317.772%20350.526%20320.259C350.526%20322.746%20349.539%20325.131%20347.781%20326.889L360%20314.677L353.363%20308.045Z%27%20fill%3D%27url%28%23paint1_linear_10_18%29%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%27paint0_linear_10_18%27%20x1%3D%27346.783%27%20y1%3D%27296.856%27%20x2%3D%27339.006%27%20y2%3D%27304.631%27%20gradientUnits%3D%27userSpaceOnUse%27%3E%3Cstop%20offset%3D%270.18%27%20stop-color%3D%27%230052CC%27%2F%3E%3Cstop%20offset%3D%271%27%20stop-color%3D%27%232684FF%27%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%27paint1_linear_10_18%27%20x1%3D%27348.843%27%20y1%3D%27319.196%27%20x2%3D%27356.605%27%20y2%3D%27311.436%27%20gradientUnits%3D%27userSpaceOnUse%27%3E%3Cstop%20offset%3D%270.18%27%20stop-color%3D%27%230052CC%27%2F%3E%3Cstop%20offset%3D%271%27%20stop-color%3D%27%232684FF%27%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')"
    },
    {
      connectionName1: 'Trello',
      accessPermissions1: 'Can preview links',
      transpilerEmail:
        'Transpilers - <span    class="transpile-all-the-things">\nbrian@transpileAllTheThings.js</span>\n',
      imgContent1:
        "url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%27331.5172%20369.5099%2036.9649%2035.5405%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20id%3D%2735940c17%27%20x%3D%270%27%20y%3D%270%27%3E%3Cg%20id%3D%27Integrations%20Page%20%28SaaS%20App%29%27%3E%3Cg%20id%3D%27Confluence%20logo%27%20clip-path%3D%27url%28%23clip2_10_18%29%27%3E%3Cpath%20id%3D%27Vector_27%27%20d%3D%27M333.291%20396.383C332.92%20396.987%20332.5%20397.695%20332.169%20398.256C332.096%20398.381%20332.049%20398.52%20332.028%20398.664C332.008%20398.808%20332.016%20398.954%20332.051%20399.095C332.084%20399.237%20332.146%20399.369%20332.23%20399.487C332.315%20399.605%20332.422%20399.706%20332.544%20399.785L339.996%20404.379C340.124%20404.459%20340.268%20404.512%20340.419%20404.536C340.568%20404.56%20340.722%20404.554%20340.87%20404.518C341.017%20404.481%20341.156%20404.417%20341.279%20404.327C341.401%20404.237%20341.503%20404.123%20341.581%20403.992C341.882%20403.492%20342.262%20402.844%20342.671%20402.153C345.625%20397.309%20348.618%20397.902%20353.965%20400.444L361.356%20403.949C361.495%20404.015%20361.645%20404.053%20361.798%20404.06C361.952%20404.067%20362.105%20404.043%20362.249%20403.989C362.392%20403.936%20362.524%20403.855%20362.635%20403.749C362.748%20403.644%20362.836%20403.517%20362.898%20403.377L366.446%20395.377C366.507%20395.242%20366.54%20395.097%20366.545%20394.95C366.55%20394.804%20366.526%20394.656%20366.476%20394.518C366.425%20394.381%20366.349%20394.253%20366.251%20394.143C366.152%20394.033%20366.034%20393.945%20365.901%20393.879C364.343%20393.145%20361.241%20391.702%20358.462%20390.342C348.351%20385.464%20339.82%20385.786%20333.291%20396.383Z%27%20fill%3D%27url%28%23paint3_linear_10_18%29%27%2F%3E%3Cpath%20id%3D%27Vector_28%27%20d%3D%27M366.703%20378.198C367.078%20377.594%20367.499%20376.887%20367.826%20376.326C367.901%20376.198%20367.95%20376.057%20367.971%20375.909C367.992%20375.763%20367.983%20375.612%20367.947%20375.469C367.91%20375.325%20367.845%20375.19%20367.756%20375.071C367.667%20374.952%20367.556%20374.851%20367.428%20374.775L359.988%20370.181C359.858%20370.101%20359.715%20370.048%20359.565%20370.024C359.414%20370%20359.261%20370.007%20359.114%20370.042C358.966%20370.079%20358.827%20370.143%20358.705%20370.233C358.583%20370.323%20358.48%20370.437%20358.401%20370.568C358.108%20371.068%20357.72%20371.716%20357.311%20372.407C354.346%20377.273%20351.381%20376.68%20346.028%20374.138L338.644%20370.632C338.506%20370.566%20338.357%20370.527%20338.205%20370.519C338.054%20370.509%20337.9%20370.531%20337.757%20370.582C337.614%20370.632%20337.482%20370.711%20337.369%20370.814C337.255%20370.916%20337.166%20371.04%20337.101%20371.178L333.553%20379.2C333.431%20379.472%20333.419%20379.781%20333.52%20380.061C333.571%20380.201%20333.648%20380.328%20333.747%20380.438C333.845%20380.548%20333.964%20380.638%20334.098%20380.702C335.662%20381.437%20338.763%20382.879%20341.537%20384.241C351.621%20389.117%20360.179%20388.796%20366.703%20378.198Z%27%20fill%3D%27url%28%23paint4_linear_10_18%29%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%27paint3_linear_10_18%27%20x1%3D%27366.207%27%20y1%3D%27406.757%27%20x2%3D%27343.696%27%20y2%3D%27393.82%27%20gradientUnits%3D%27userSpaceOnUse%27%3E%3Cstop%20stop-color%3D%27%230052CC%27%2F%3E%3Cstop%20offset%3D%270.92%27%20stop-color%3D%27%232380FB%27%2F%3E%3Cstop%20offset%3D%271%27%20stop-color%3D%27%232684FF%27%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%27paint4_linear_10_18%27%20x1%3D%27333.786%27%20y1%3D%27367.819%27%20x2%3D%27356.304%27%20y2%3D%27380.757%27%20gradientUnits%3D%27userSpaceOnUse%27%3E%3Cstop%20stop-color%3D%27%230052CC%27%2F%3E%3Cstop%20offset%3D%270.92%27%20stop-color%3D%27%232380FB%27%2F%3E%3Cstop%20offset%3D%271%27%20stop-color%3D%27%232684FF%27%2F%3E%3C%2FlinearGradient%3E%3CclipPath%20id%3D%27clip2_10_18%27%3E%3Crect%20width%3D%2736%27%20height%3D%2734.56%27%20fill%3D%27white%27%20transform%3D%27translate%28332%20370%29%27%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')"
    }
  ],

  menuOptionsWithContent: [
    {
      menuOption: 'My Account',
      htmlOrSvgContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Bold / Users / User Rounded" opacity="0.6" xmlns="http://www.w3.org/2000/svg"><circle id="Vector" cx="12" cy="6.5" r="4" fill="currentColor"/><ellipse id="Vector_2" cx="12" cy="17.5" rx="7" ry="4" fill="currentColor"/></g></svg>'
    },
    {
      menuOption: 'Notifications & Settings',
      htmlOrSvgContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Bold / Settings, Fine Tuning / Tuning 2" xmlns="http://www.w3.org/2000/svg"><g id="Vector_3"><path d="M9.5,14c1.6569,0 3,1.343 3,3c0,1.657 -1.3431,3 -3,3c-1.6569,0 -3,-1.343 -3,-3c0,-1.657 1.3431,-3 3,-3z" fill="currentColor" fill-opacity="0.6"/><path d="M14.5,4c-1.6569,0 -3,1.343 -3,3c0,1.657 1.3431,3 3,3c1.6569,0 3,-1.343 3,-3c0,-1.657 -1.3431,-3 -3,-3z" fill="currentColor" fill-opacity="0.6"/><path d="M9,6.209c0.4142,0 0.75,0.335 0.75,0.75c0,0.414 -0.3358,0.75 -0.75,0.75h-7c-0.4142,0 -0.75,-0.336 -0.75,-0.75c0,-0.415 0.3358,-0.75 0.75,-0.75z" fill="currentColor" fill-opacity="0.6"/><path d="M15,16.209c-0.4142,0 -0.75,0.335 -0.75,0.75c0,0.414 0.3358,0.75 0.75,0.75h7c0.4142,0 0.75,-0.336 0.75,-0.75c0,-0.415 -0.3358,-0.75 -0.75,-0.75z" fill="currentColor" fill-opacity="0.6"/><path d="M1.25,16.959c0,-0.415 0.3358,-0.75 0.75,-0.75h2c0.4142,0 0.75,0.335 0.75,0.75c0,0.414 -0.3358,0.75 -0.75,0.75h-2c-0.4142,0 -0.75,-0.336 -0.75,-0.75z" fill="currentColor" fill-opacity="0.6"/><path d="M22,6.209c0.4142,0 0.75,0.335 0.75,0.75c0,0.414 -0.3358,0.75 -0.75,0.75h-2c-0.4142,0 -0.75,-0.336 -0.75,-0.75c0,-0.415 0.3358,-0.75 0.75,-0.75z" fill="currentColor" fill-opacity="0.6"/></g></g></svg>'
    },
    {
      menuOption: 'My Connections',
      htmlOrSvgContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Bold / Arrows / Square Arrow Right Up" xmlns="http://www.w3.org/2000/svg"><path id="Vector_4" fill-rule="evenodd" clip-rule="evenodd" d="M20.5355,20.536c1.4645,-1.465 1.4645,-3.822 1.4645,-8.536c0,-4.714 0,-7.071 -1.4645,-8.536c-1.4644,-1.464 -3.8215,-1.464 -8.5355,-1.464c-4.714,0 -7.0711,0 -8.5355,1.464c-1.4645,1.465 -1.4645,3.822 -1.4645,8.536c0,4.714 0,7.071 1.4645,8.536c1.4644,1.464 3.8215,1.464 8.5355,1.464c4.714,0 7.0711,0 8.5355,-1.464zM14.8284,8.422c0.4142,0 0.75,0.335 0.75,0.75v4.242c0,0.414 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.336 -0.75,-0.75v-2.432l-4.3765,4.377c-0.2929,0.293 -0.7678,0.293 -1.0607,0c-0.2929,-0.293 -0.2929,-0.768 0,-1.061l4.3766,-4.376h-2.432c-0.4142,0 -0.75,-0.336 -0.75,-0.75c0,-0.415 0.3358,-0.75 0.75,-0.75z" fill="currentColor"/></g></svg>'
    },
    {
      menuOption: 'Language & Region',
      htmlOrSvgContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Bold / Map &amp; Location / Global" xmlns="http://www.w3.org/2000/svg"><g id="Vector_5"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.02765,11.25c0.3836,-5.173 4.7018,-9.25 9.9723,-9.25c-0.8308,0 -1.5706,0.364 -2.1792,0.921c-0.6055,0.554 -1.1172,1.328 -1.5311,2.242c-0.4163,0.92 -0.7397,1.996 -0.9585,3.163c-0.1755,0.936 -0.2823,1.923 -0.3179,2.924zM2.02765,12.75h4.9856c0.0356,1.001 0.1424,1.988 0.3179,2.924c0.2188,1.167 0.5422,2.243 0.9585,3.163c0.4139,0.914 0.9256,1.688 1.5311,2.242c0.6086,0.557 1.3484,0.921 2.1792,0.921c-5.2705,0 -9.5887,-4.077 -9.9723,-9.25z" fill="currentColor" fill-opacity="0.6"/><path d="M11.99995,3.395c-0.275,0 -0.6302,0.117 -1.0434,0.495c-0.4161,0.381 -0.8328,0.978 -1.2009,1.791c-0.3656,0.808 -0.6625,1.783 -0.8668,2.873c-0.1609,0.858 -0.2608,1.768 -0.2958,2.696h6.8139c-0.0351,-0.928 -0.1349,-1.838 -0.2958,-2.696c-0.2043,-1.09 -0.5012,-2.065 -0.8669,-2.873c-0.3681,-0.813 -0.7847,-1.41 -1.2009,-1.791c-0.4131,-0.378 -0.7684,-0.495 -1.0434,-0.495z" fill="currentColor" fill-opacity="0.6"/><path d="M8.88885,15.446c0.2043,1.09 0.5012,2.065 0.8668,2.873c0.3681,0.813 0.7848,1.41 1.2009,1.791c0.4131,0.378 0.7684,0.495 1.0434,0.495c0.275,0 0.6303,-0.117 1.0434,-0.495c0.4162,-0.381 0.8328,-0.978 1.2009,-1.791c0.3657,-0.808 0.6626,-1.783 0.8669,-2.873c0.1609,-0.858 0.2607,-1.768 0.2958,-2.696h-6.8139c0.035,0.928 0.1349,1.838 0.2958,2.696z" fill="currentColor" fill-opacity="0.6"/><path d="M11.99995,2c0.8309,0 1.5707,0.364 2.1792,0.921c0.6056,0.554 1.1173,1.328 1.5311,2.242c0.4163,0.92 0.7397,1.996 0.9586,3.163c0.1755,0.936 0.2822,1.923 0.3178,2.924h4.9856c-0.3835,-5.173 -4.7017,-9.25 -9.9723,-9.25z" fill="currentColor" fill-opacity="0.6"/><path d="M16.66885,15.674c-0.2189,1.167 -0.5423,2.243 -0.9586,3.163c-0.4138,0.914 -0.9255,1.688 -1.5311,2.242c-0.6085,0.557 -1.3483,0.921 -2.1792,0.921c5.2706,0 9.5888,-4.077 9.9723,-9.25h-4.9856c-0.0356,1.001 -0.1423,1.988 -0.3178,2.924z" fill="currentColor" fill-opacity="0.6"/></g></g></svg>'
    }
  ],
  menuOptionsWithContent1: [
    {
      menuOption: 'Settings',
      htmlOrSvgContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Bold / Settings, Fine Tuning / Settings" xmlns="http://www.w3.org/2000/svg"><path id="Vector_6" fill-rule="evenodd" clip-rule="evenodd" d="M13.7788,2.152c-0.3703,-0.152 -0.8398,-0.152 -1.7788,-0.152c-0.939,0 -1.4085,0 -1.7788,0.152c-0.4938,0.203 -0.8861,0.593 -1.0906,1.083c-0.0934,0.223 -0.1299,0.484 -0.1442,0.863c-0.0211,0.558 -0.3092,1.074 -0.7962,1.353c-0.487,0.279 -1.0816,0.269 -1.5787,0.008c-0.3383,-0.178 -0.5836,-0.276 -0.8255,-0.308c-0.5299,-0.069 -1.0658,0.073 -1.4898,0.396c-0.3181,0.242 -0.5528,0.646 -1.0223,1.453c-0.4695,0.807 -0.7042,1.21 -0.7566,1.605c-0.0697,0.526 0.0739,1.058 0.3992,1.478c0.1486,0.193 0.3573,0.354 0.6812,0.556c0.4762,0.297 0.7826,0.803 0.7826,1.361c0,0.558 -0.3064,1.064 -0.7826,1.361c-0.324,0.202 -0.5327,0.363 -0.6813,0.555c-0.3253,0.421 -0.4689,0.953 -0.3992,1.479c0.0524,0.394 0.2871,0.798 0.7566,1.605c0.4695,0.807 0.7042,1.211 1.0223,1.453c0.424,0.323 0.9599,0.465 1.4898,0.396c0.2419,-0.032 0.4872,-0.13 0.8254,-0.308c0.4972,-0.261 1.0918,-0.271 1.5788,0.008c0.487,0.279 0.7752,0.795 0.7963,1.353c0.0143,0.38 0.0508,0.64 0.1442,0.863c0.2045,0.49 0.5968,0.88 1.0906,1.083c0.3703,0.152 0.8398,0.152 1.7788,0.152c0.939,0 1.4085,0 1.7788,-0.152c0.4938,-0.203 0.8861,-0.593 1.0906,-1.083c0.0934,-0.223 0.13,-0.484 0.1443,-0.863c0.021,-0.558 0.3091,-1.074 0.7961,-1.353c0.487,-0.279 1.0816,-0.269 1.5788,-0.008c0.3383,0.178 0.5835,0.276 0.8254,0.308c0.5299,0.069 1.0658,-0.073 1.4898,-0.396c0.3181,-0.243 0.5528,-0.646 1.0223,-1.453c0.4695,-0.807 0.7042,-1.211 0.7566,-1.605c0.0697,-0.526 -0.0739,-1.058 -0.3992,-1.479c-0.1486,-0.192 -0.3573,-0.353 -0.6813,-0.555c-0.4761,-0.297 -0.7825,-0.803 -0.7825,-1.361c0,-0.558 0.3064,-1.064 0.7825,-1.361c0.3241,-0.202 0.5328,-0.363 0.6814,-0.555c0.3253,-0.421 0.4689,-0.953 0.3992,-1.479c-0.0524,-0.394 -0.2871,-0.798 -0.7566,-1.605c-0.4695,-0.807 -0.7042,-1.211 -1.0223,-1.453c-0.424,-0.323 -0.9599,-0.465 -1.4898,-0.396c-0.2419,0.032 -0.4872,0.13 -0.8254,0.308c-0.4972,0.261 -1.0918,0.271 -1.5788,-0.008c-0.487,-0.279 -0.7752,-0.795 -0.7963,-1.353c-0.0143,-0.38 -0.0508,-0.64 -0.1442,-0.863c-0.2045,-0.49 -0.5968,-0.88 -1.0906,-1.083zM12,15c1.6695,0 3.0228,-1.343 3.0228,-3c0,-1.657 -1.3533,-3 -3.0228,-3c-1.6695,0 -3.0228,1.343 -3.0228,3c0,1.657 1.3533,3 3.0228,3z" fill="currentColor" fill-opacity="0.6"/></g></svg>'
    },
    {
      menuOption: 'Teamspaces',
      htmlOrSvgContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Bold / Building, Infrastructure / Buildings" xmlns="http://www.w3.org/2000/svg"><path id="Vector_7" fill-rule="evenodd" clip-rule="evenodd" d="M15,1.625h2c1.8856,0 2.8284,0 3.4142,0.586c0.5858,0.586 0.5858,1.528 0.5858,3.414v15.25h1c0.4142,0 0.75,0.336 0.75,0.75c0,0.414 -0.3358,0.75 -0.75,0.75h-20c-0.4142,0 -0.75,-0.336 -0.75,-0.75c0,-0.414 0.3358,-0.75 0.75,-0.75h1v-12.25c0,-1.886 0,-2.828 0.5858,-3.414c0.5858,-0.586 1.5286,-0.586 3.4142,-0.586h4c1.8856,0 2.8284,0 3.4142,0.586c0.5858,0.586 0.5858,1.528 0.5858,3.414v12.25h1.5v-12.25v-0.089c0.0001,-0.866 0.0002,-1.66 -0.0866,-2.305c-0.0956,-0.711 -0.3205,-1.463 -0.9385,-2.081c-0.6181,-0.618 -1.3695,-0.843 -2.0805,-0.938c-0.6365,-0.086 -1.417,-0.087 -2.2684,-0.087c0.0843,-0.387 0.225,-0.679 0.4598,-0.914c0.5858,-0.586 1.5286,-0.586 3.4142,-0.586zM5.25,7.625c0,-0.414 0.3358,-0.75 0.75,-0.75h6c0.4142,0 0.75,0.336 0.75,0.75c0,0.414 -0.3358,0.75 -0.75,0.75h-6c-0.4142,0 -0.75,-0.336 -0.75,-0.75zM5.25,10.625c0,-0.414 0.3358,-0.75 0.75,-0.75h6c0.4142,0 0.75,0.336 0.75,0.75c0,0.414 -0.3358,0.75 -0.75,0.75h-6c-0.4142,0 -0.75,-0.336 -0.75,-0.75zM5.25,13.625c0,-0.414 0.3358,-0.75 0.75,-0.75h6c0.4142,0 0.75,0.336 0.75,0.75c0,0.414 -0.3358,0.75 -0.75,0.75h-6c-0.4142,0 -0.75,-0.336 -0.75,-0.75zM9,17.875c0.4142,0 0.75,0.336 0.75,0.75v2.25h-1.5v-2.25c0,-0.414 0.3358,-0.75 0.75,-0.75z" fill="currentColor" fill-opacity="0.6"/></g></svg>'
    },
    {
      menuOption: 'Members',
      htmlOrSvgContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Bold / Users / Users Group Rounded" xmlns="http://www.w3.org/2000/svg"><circle id="Vector_8" cx="9.500699999999995" cy="6.499500000000012" r="4" fill="currentColor" fill-opacity="0.6"/><ellipse id="Vector_9" cx="9.500699999999995" cy="17.500499999999988" rx="7" ry="4" fill="currentColor" fill-opacity="0.6"/><g id="Vector_10"><path d="M21.4993,17.4995c0,1.657 -2.0355,3 -4.5208,3c0.7322,-0.8 1.2357,-1.804 1.2357,-2.998c0,-1.195 -0.5047,-2.201 -1.2383,-3.002c2.4853,0 4.5234,1.344 4.5234,3z" fill="currentColor" fill-opacity="0.6"/><path d="M18.4993,6.5005c0,1.657 -1.3431,3 -3,3c-0.3613,0 -0.7076,-0.064 -1.0284,-0.181c0.4731,-0.832 0.7433,-1.795 0.7433,-2.82c0,-1.025 -0.2698,-1.987 -0.7423,-2.819c0.3205,-0.117 0.6665,-0.18 1.0274,-0.18c1.6569,0 3,1.343 3,3z" fill="currentColor" fill-opacity="0.6"/></g></g></svg>'
    },
    {
      menuOption: 'Plans',
      htmlOrSvgContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Bold / School / Notebook Minimalistic" xmlns="http://www.w3.org/2000/svg"><g id="Vector_11"><path d="M2.25,16.37775v-11.146c0,-1.098 0.8863,-1.99 1.9824,-1.923c0.9764,0.06 2.1311,0.179 3.0176,0.412c1.0492,0.277 2.2961,0.867 3.2823,1.388c0.307,0.163 0.6335,0.275 0.9677,0.339v15.179c-0.3029,-0.067 -0.5985,-0.175 -0.8776,-0.324c-0.9995,-0.533 -2.2909,-1.15 -3.3724,-1.436c-0.8767,-0.231 -2.0157,-0.35 -2.9851,-0.41c-1.1089,-0.07 -2.0149,-0.968 -2.0149,-2.079z" fill="currentColor" fill-opacity="0.6"/><path d="M13,20.62675c0.3029,-0.067 0.5985,-0.175 0.8776,-0.324c0.9995,-0.533 2.2909,-1.15 3.3724,-1.436c0.8767,-0.231 2.0157,-0.35 2.9851,-0.41c1.1089,-0.07 2.0149,-0.968 2.0149,-2.079v-11.211c0,-1.072 -0.8462,-1.953 -1.918,-1.915c-1.1286,0.039 -2.5351,0.156 -3.582,0.469c-0.9076,0.272 -1.9647,0.817 -2.8262,1.316c-0.2914,0.168 -0.603,0.292 -0.9238,0.371z" fill="currentColor" fill-opacity="0.6"/></g></g></svg>'
    },
    {
      menuOption: 'Billing',
      htmlOrSvgContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Bold / School / Calculator" xmlns="http://www.w3.org/2000/svg"><path id="Vector_12" fill-rule="evenodd" clip-rule="evenodd" d="M12,22c-4.2426,0 -6.364,0 -7.682,-1.464c-1.318,-1.465 -1.318,-3.822 -1.318,-8.536c0,-4.714 0,-7.071 1.318,-8.536c1.318,-1.464 3.4394,-1.464 7.682,-1.464c4.2426,0 6.364,0 7.682,1.464c1.318,1.465 1.318,3.822 1.318,8.536c0,4.714 0,7.071 -1.318,8.536c-1.318,1.464 -3.4394,1.464 -7.682,1.464zM15,6h-6c-0.465,0 -0.6975,0 -0.8882,0.051c-0.5177,0.139 -0.922,0.543 -1.0607,1.061c-0.0511,0.191 -0.0511,0.423 -0.0511,0.888c0,0.465 0,0.697 0.0511,0.888c0.1387,0.518 0.543,0.922 1.0607,1.061c0.1907,0.051 0.4232,0.051 0.8882,0.051h6c0.465,0 0.6975,0 0.8882,-0.051c0.5177,-0.139 0.922,-0.543 1.0607,-1.061c0.0511,-0.191 0.0511,-0.423 0.0511,-0.888c0,-0.465 0,-0.697 -0.0511,-0.888c-0.1387,-0.518 -0.543,-0.922 -1.0607,-1.061c-0.1907,-0.051 -0.4232,-0.051 -0.8882,-0.051zM9,13c0,0.552 -0.4477,1 -1,1c-0.5523,0 -1,-0.448 -1,-1c0,-0.552 0.4477,-1 1,-1c0.5523,0 1,0.448 1,1zM12,14c0.5523,0 1,-0.448 1,-1c0,-0.552 -0.4477,-1 -1,-1c-0.5523,0 -1,0.448 -1,1c0,0.552 0.4477,1 1,1zM17,13c0,0.552 -0.4477,1 -1,1c-0.5523,0 -1,-0.448 -1,-1c0,-0.552 0.4477,-1 1,-1c0.5523,0 1,0.448 1,1zM16,18c0.5523,0 1,-0.448 1,-1c0,-0.552 -0.4477,-1 -1,-1c-0.5523,0 -1,0.448 -1,1c0,0.552 0.4477,1 1,1zM13,17c0,0.552 -0.4477,1 -1,1c-0.5523,0 -1,-0.448 -1,-1c0,-0.552 0.4477,-1 1,-1c0.5523,0 1,0.448 1,1zM8,18c0.5523,0 1,-0.448 1,-1c0,-0.552 -0.4477,-1 -1,-1c-0.5523,0 -1,0.448 -1,1c0,0.552 0.4477,1 1,1z" fill="currentColor" fill-opacity="0.6"/></g></svg>'
    },
    {
      menuOption: 'Security',
      htmlOrSvgContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Bold / Security / Lock Password" xmlns="http://www.w3.org/2000/svg"><path id="Vector_13" fill-rule="evenodd" clip-rule="evenodd" d="M5.25,10.43v-2.055c0,-3.728 3.0221,-6.75 6.75,-6.75c3.7279,0 6.75,3.022 6.75,6.75v2.055c1.1148,0.083 1.8407,0.293 2.3713,0.824c0.8787,0.878 0.8787,2.293 0.8787,5.121c0,2.828 0,4.243 -0.8787,5.121c-0.8787,0.879 -2.2929,0.879 -5.1213,0.879h-8c-2.8284,0 -4.2426,0 -5.1213,-0.879c-0.8787,-0.878 -0.8787,-2.293 -0.8787,-5.121c0,-2.828 0,-4.243 0.8787,-5.121c0.5306,-0.531 1.2565,-0.741 2.3713,-0.824zM6.75,8.375c0,-2.899 2.3505,-5.25 5.25,-5.25c2.8995,0 5.25,2.351 5.25,5.25v2.004c-0.383,-0.004 -0.7985,-0.004 -1.25,-0.004h-8c-0.4515,0 -0.867,0 -1.25,0.004zM8,17.375c0.5523,0 1,-0.448 1,-1c0,-0.552 -0.4477,-1 -1,-1c-0.5523,0 -1,0.448 -1,1c0,0.552 0.4477,1 1,1zM12,17.375c0.5523,0 1,-0.448 1,-1c0,-0.552 -0.4477,-1 -1,-1c-0.5523,0 -1,0.448 -1,1c0,0.552 0.4477,1 1,1zM17,16.375c0,0.552 -0.4477,1 -1,1c-0.5523,0 -1,-0.448 -1,-1c0,-0.552 0.4477,-1 1,-1c0.5523,0 1,0.448 1,1z" fill="currentColor" fill-opacity="0.6"/></g></svg>'
    },
    {
      menuOption: 'Identity & Provisioning',
      htmlOrSvgContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Bold / Security / Shield Check" xmlns="http://www.w3.org/2000/svg"><path id="Vector_14" fill-rule="evenodd" clip-rule="evenodd" d="M3.3775,5.082c-0.3775,0.538 -0.3775,2.137 -0.3775,5.335v1.574c0,5.638 4.239,8.374 6.8986,9.536c0.7214,0.315 1.0821,0.473 2.1014,0.473c1.0193,0 1.38,-0.158 2.1014,-0.473c2.6596,-1.162 6.8986,-3.898 6.8986,-9.536v-1.574c0,-3.198 0,-4.797 -0.3775,-5.335c-0.3775,-0.537 -1.8808,-1.052 -4.8874,-2.081l-0.5728,-0.196c-1.5673,-0.537 -2.3509,-0.805 -3.1623,-0.805c-0.8114,0 -1.595,0.268 -3.1623,0.805l-0.5728,0.196c-3.0066,1.029 -4.5099,1.544 -4.8874,2.081zM15.0595,10.5c0.2758,-0.309 0.249,-0.784 -0.06,-1.059c-0.309,-0.276 -0.7831,-0.249 -1.059,0.059l-3.0119,3.374l-0.8691,-0.974c-0.2759,-0.308 -0.75,-0.335 -1.059,-0.059c-0.309,0.275 -0.3358,0.75 -0.06,1.059l1.4286,1.6c0.1423,0.159 0.3458,0.25 0.5595,0.25c0.2136,0 0.4171,-0.091 0.5594,-0.25z" fill="currentColor" fill-opacity="0.6"/></g></svg>'
    },
    {
      menuOption: 'Connections',
      htmlOrSvgContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Bold / Settings, Fine Tuning / Widget 6" xmlns="http://www.w3.org/2000/svg"><g id="Vector_15"><path d="M2,6.5c0,-2.485 2.0147,-4.5 4.5,-4.5c2.4853,0 4.5,2.015 4.5,4.5v3c0,0.349 0,0.523 -0.0383,0.666c-0.1041,0.388 -0.4073,0.692 -0.7955,0.796c-0.1431,0.038 -0.3175,0.038 -0.6662,0.038h-3c-2.4853,0 -4.5,-2.015 -4.5,-4.5z" fill="currentColor" fill-opacity="0.6"/><path d="M13,14.5c0,-0.349 0,-0.523 0.0383,-0.666c0.1041,-0.388 0.4073,-0.692 0.7955,-0.796c0.1431,-0.038 0.3175,-0.038 0.6662,-0.038h3c2.4853,0 4.5,2.015 4.5,4.5c0,2.485 -2.0147,4.5 -4.5,4.5c-2.4853,0 -4.5,-2.015 -4.5,-4.5z" fill="currentColor" fill-opacity="0.6"/><path d="M2,17.5c0,-2.485 2.0147,-4.5 4.5,-4.5h2.7c0.6301,0 0.9451,0 1.1857,0.123c0.2117,0.107 0.3838,0.28 0.4917,0.491c0.1226,0.241 0.1226,0.556 0.1226,1.186v2.7c0,2.485 -2.0147,4.5 -4.5,4.5c-2.4853,0 -4.5,-2.015 -4.5,-4.5z" fill="currentColor" fill-opacity="0.6"/><path d="M13,6.5c0,-2.485 2.0147,-4.5 4.5,-4.5c2.4853,0 4.5,2.015 4.5,4.5c0,2.485 -2.0147,4.5 -4.5,4.5h-3.2143c-0.1492,0 -0.2239,0 -0.2867,-0.007c-0.5215,-0.059 -0.9332,-0.47 -0.9919,-0.992c-0.0071,-0.063 -0.0071,-0.137 -0.0071,-0.287z" fill="currentColor" fill-opacity="0.6"/></g></g></svg>'
    },
    {
      menuOption: 'Import',
      htmlOrSvgContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Bold / Files / File Download" xmlns="http://www.w3.org/2000/svg"><g id="Vector_16"><path d="M19.1238,7.867l-3.9588,-3.563c-1.1278,-1.015 -1.6917,-1.523 -2.3837,-1.788l-0.0092,2.734c0,2.357 0,3.536 0.7322,4.268c0.7323,0.732 1.9108,0.732 4.2678,0.732h3.5801c-0.3626,-0.704 -1.0117,-1.288 -2.2284,-2.383z" fill="currentColor" fill-opacity="0.6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.7721,22.25h4c3.7712,0 5.6569,0 6.8284,-1.172c1.1716,-1.171 1.1716,-3.057 1.1716,-6.828v-0.437c0,-0.873 0,-1.529 -0.0426,-2.063h-3.9574h-0.0949c-1.0971,0 -2.0666,0 -2.8482,-0.105c-0.8471,-0.114 -1.6941,-0.375 -2.3853,-1.066c-0.6913,-0.692 -0.9528,-1.539 -1.0667,-2.386c-0.1051,-0.781 -0.105,-1.751 -0.1049,-2.848l0.0092,-2.834c0.0003,-0.083 0.0074,-0.164 0.0208,-0.244c-0.4086,-0.017 -0.8942,-0.017 -1.5002,-0.017c-3.7911,0 -5.6867,0 -6.8582,1.172c-1.1716,1.171 -1.1716,3.057 -1.1716,6.828v4c0,3.771 0,5.657 1.1716,6.828c1.1715,1.172 3.0572,1.172 6.8284,1.172zM7.7591,19.297c0.2885,0.271 0.7375,0.271 1.026,0l2,-1.875c0.3021,-0.283 0.3175,-0.758 0.0342,-1.06c-0.2833,-0.302 -0.758,-0.317 -1.0602,-0.034l-0.737,0.691v-3.269c0,-0.414 -0.3358,-0.75 -0.75,-0.75c-0.4142,0 -0.75,0.336 -0.75,0.75v3.269l-0.737,-0.691c-0.3022,-0.283 -0.7769,-0.268 -1.0602,0.034c-0.2833,0.302 -0.2679,0.777 0.0342,1.06z" fill="currentColor" fill-opacity="0.6"/></g></g></svg>'
    }
  ]
}

export { mockData }