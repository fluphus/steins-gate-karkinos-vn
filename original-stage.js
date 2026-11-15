/* Supplementary original stage presentation.
 * Reads preserved controller events and UI declarations; owns no game transitions,
 * audio players, video elements, passwords, or checkpoint data.
 */
(function(root){
  'use strict';
  let activeKey='',host=null,liveFade='',lastContext=null,trialCleanup=null;
  const timers=new Set();
  const stageScreens={AR1_3_04:'call_display_kurisu',AR1_3_17:'call_display',AR1_4_14:'mall'};
  const classes=['original-call','original-mall','original-search','original-white','original-blur','original-credits','original-final-choice','original-memory-white','original-memory-return','original-memory-black'];
  function later(fn,ms){const key=activeKey;const id=setTimeout(()=>{timers.delete(id);if(key===activeKey)fn();},ms);timers.add(id);}
  function cancel(){timers.forEach(clearTimeout);timers.clear();liveFade='';}
  function byId(id){return host?.querySelector('#'+id)||null;}
  function describe(ctx){
    const {scene,row,state}=ctx,id=row?.id||'',sid=scene?.id||'';
    const index=scene?.rows?.findIndex(r=>r.id===id)??-1;
    const passed=(record)=>state?.visits?.includes(record)||(index>=0&&index>=scene.rows.findIndex(r=>r.id===record)&&scene.rows.some(r=>r.id===record));
    const ending=sid==='82ezfsx';
    const opacity=ending?(passed('AR3_4_19') ? .3 : passed('AR3_4_10') ? .4 : passed('AR3_4_05') ? .6 : 1):1;
    return {key:sid+':'+id,stageUi:stageScreens[id]||null,search:id==='AR1_3_10',
      white:sid==='yddnar9'&&['AR3_3_17','AR3_3_18'].includes(id),
      blur:id==='AR3_1_37',credits:ending&&['AR3_4_20_1','AR3_4_20_2'].includes(id)&&state.mode!=='clear',
      clear:state?.mode==='clear'&&!!scene.ui?.clear_bg,ending,opacity,
      finalChoice:id==='AR3_3_15_EXbtn',
      memoryWhite:sid==='fryi3j5'&&id==='AR2_4_23_0',memoryReturn:sid==='fryi3j5'&&id==='AR2_4_23',memoryBlack:sid==='fryi3j5'&&passed('AR2_4_24'),
      hiddenMemory:['AR2_2_08','AR2_3_16'].includes(id),
      clearLayers:['clear_bg','clear','clear_end','clear_info'].filter(n=>scene.ui?.[n])};
  }
  function setArt(element,path){if(!element)return;if(path&&element.getAttribute('src')!==path)element.src=path;element.hidden=!path;}
  function composeClear(ctx,plan){
    const content=byId('end-content'),panel=byId('end-panel');if(!content||!panel)return;
    panel.classList.toggle('original-clear-panel',plan.clear);
    if(!plan.clear){content.querySelector('.original-clear-composition')?.remove();return;}
    // The host rebuilds end-content on every paint, so rebuild only the compact
    // source composition. Local next/home controls remain the host's own controls.
    content.querySelector('.original-clear-composition')?.remove();
    const composition=document.createElement('div');composition.className='original-clear-composition';
    composition.setAttribute('role','img');
    composition.setAttribute('aria-label',ctx.lang==='ja'?'原作の章クリア画面':'原版章节完成画面');
    for(const name of plan.clearLayers){
      const image=document.createElement('img');image.src=ctx.scene.ui[name];image.alt='';image.dataset.originalUi=name;
      const decl=ctx.scene.uiDeclarations?.[name];
      if(decl){
        const top=name==='clear'?'3.15%':decl.position?.top||'0%';
        image.style.left=decl.position?.left||'0%';
        image.style.top=(parseFloat(top)*667/545)+'%';
        image.style.width=decl.width||'100%';
        image.style.height=decl.height?(parseFloat(decl.height)*667/545)+'%':'auto';
      }
      composition.append(image);
    }
    content.prepend(composition);
  }
  function render(ctx){
    if(!ctx?.scene||!ctx.row||!ctx.container)return;
    host=ctx.container;lastContext=ctx;
    const plan=describe(ctx);
    if(plan.key!==activeKey){cancel();classes.forEach(c=>host.classList.remove(c));activeKey=plan.key;}
    host.dataset.originalStage=ctx.row.id;
    host.classList.toggle('original-call',/^call_display/.test(plan.stageUi||''));
    host.classList.toggle('original-mall',plan.stageUi==='mall');
    host.classList.toggle('original-search',plan.search);
    host.classList.toggle('original-white',plan.white);
    host.classList.toggle('original-credits',plan.credits);
    host.classList.toggle('original-final-choice',plan.finalChoice);
    host.classList.toggle('original-memory-white',plan.memoryWhite);
    host.classList.toggle('original-memory-return',plan.memoryReturn);
    host.classList.toggle('original-memory-black',plan.memoryBlack);
    const branch=byId('branches');
    if(branch){branch.classList.toggle('original-choice-card',ctx.scene.id==='yddnar9'&&ctx.state.mode==='branch');branch.style.backgroundImage=ctx.scene.id==='yddnar9'&&ctx.scene.ui.branch_bg?`url("${ctx.scene.ui.branch_bg}")`:'';}
    setArt(byId('stage-art'),plan.stageUi&&ctx.scene.ui[plan.stageUi]);
    if(plan.search){
      const button=byId('action-button'),image=byId('action-image');
      if(button)button.setAttribute('aria-label',ctx.lang==='ja'?'検索する':'点击搜索');
      if(image)image.alt=ctx.lang==='ja'?'原作の検索画面':'原版搜索画面';
    }
    const intro=host.querySelector('#original-trial-intro');
    if(intro){
      intro.querySelector('#original-trial-close').setAttribute('aria-label',ctx.lang==='ja'?'体験版を始める':'关闭说明，开始试玩');
    }
    const portrait=byId('character');
    if(portrait&&liveFade!==plan.key){portrait.style.transition='opacity 2s';portrait.style.opacity=String(plan.opacity);}
    if(plan.hiddenMemory){if(portrait)portrait.hidden=true;if(byId('dialogue-wrap'))byId('dialogue-wrap').hidden=true;}
    if(plan.finalChoice){
      const no=byId('branch-no'),yes=byId('branch-yes');
      if(no&&liveFade!==plan.key)no.style.opacity='.1';
      const yesArt=ctx.choiceArt?.("branch_yes_right")||ctx.scene.ui.branch_yes_right;
      if(yes&&yesArt)yes.style.backgroundImage=`url("${yesArt}")`;
    }
    if(plan.credits){
      if(portrait)portrait.hidden=false;
      const dialogue=byId('dialogue-wrap');if(dialogue)dialogue.hidden=false;
      if(byId('dialogue'))byId('dialogue').disabled=true;
      if(byId('replay-button'))byId('replay-button').hidden=true;
    }
    let prop=host.querySelector('#original-switch-prop');
    if(plan.ending&&!plan.clear){
      if(!prop){prop=document.createElement('img');prop.id='original-switch-prop';prop.src='puzzle-assets/switch-00.png';prop.alt=ctx.lang==='ja'?'原作の世界線変動スイッチ':'原版世界线变动开关';prop.addEventListener('error',()=>prop.hidden=true);host.insertBefore(prop,byId('dialogue-wrap'));}
      prop.hidden=ctx.state.mode==='puzzle';
    }else prop?.remove();
    composeClear(ctx,plan);
    return plan;
  }
  function enter(ctx){
    const plan=render(ctx);if(!plan)return;
    if(plan.blur){host.classList.remove('original-blur');void host.offsetWidth;host.classList.add('original-blur');}
    const fade={AR3_4_05:[1,.6],AR3_4_10:[.6,.4],AR3_4_19:[.4,.3]}[ctx.row.id];
    if(plan.ending&&fade){
      const character=byId('character');
      if(character){liveFade=plan.key;character.style.transition='none';character.style.opacity=String(fade[0]);void character.offsetWidth;character.style.transition='opacity 2s';later(()=>character.style.opacity=String(fade[1]),700);later(()=>liveFade='',2750);}
    }
    if(plan.finalChoice){
      const no=byId('branch-no');
      if(no){liveFade=plan.key;no.style.transition='none';no.style.opacity='1';void no.offsetWidth;no.style.transition='opacity 2s';later(()=>no.style.opacity='.1',1000);later(()=>liveFade='',3050);}
    }
  }
  function clean(){
    cancel();
    if(trialCleanup){trialCleanup();trialCleanup=null;}
    if(host){
      classes.forEach(c=>host.classList.remove(c));delete host.dataset.originalStage;
      const character=byId('character');if(character){character.style.removeProperty('transition');character.style.removeProperty('opacity');}
      const no=byId('branch-no');if(no){no.style.removeProperty('transition');no.style.removeProperty('opacity');}
      byId('end-panel')?.classList.remove('original-clear-panel');
      host.querySelector('.original-clear-composition')?.remove();
      host.querySelector('#original-switch-prop')?.remove();
      const branch=byId('branches');if(branch){branch.classList.remove('original-choice-card');branch.style.removeProperty('background-image');}
    }
    activeKey='';host=null;lastContext=null;
  }
  function showTrialIntro(ctx,onClose){
    if(trialCleanup)trialCleanup();
    const container=ctx?.container,path=ctx?.scene?.ui?.trial_info;
    if(!container||!path){onClose?.();return ()=>{};}
    const overlay=document.createElement('section');overlay.id='original-trial-intro';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');
    const picture=document.createElement('img');picture.className='original-trial-picture';picture.src=path;picture.alt=ctx.lang==='ja'?'原作の体験版案内':'原版试玩说明';
    const button=document.createElement('button');button.id='original-trial-close';button.type='button';button.setAttribute('aria-label',ctx.lang==='ja'?'体験版を始める':'关闭说明，开始试玩');
    const icon=document.createElement('img');icon.src=ctx.scene.ui.trial_info_close_button;icon.alt='';button.append(icon);
    overlay.append(picture,button);container.append(overlay);
    let disposed=false;
    const dispose=()=>{if(disposed)return;disposed=true;overlay.remove();if(trialCleanup===dispose)trialCleanup=null;};
    button.addEventListener('click',()=>{dispose();onClose?.();},{once:true});
    overlay.addEventListener('keydown',event=>{if(event.key==='Tab'){event.preventDefault();button.focus();}});
    button.focus();trialCleanup=dispose;return dispose;
  }
  root.KarkinosOriginalStage={render,enter,clean,describe,showTrialIntro,get state(){return lastContext?describe(lastContext):null;}};
})(window);
