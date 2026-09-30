class Lucky48HostEngine {
  constructor() {
    this.state = {
      lang: 'zh',
      drawNumbers: null,
      lockedSlots: {},
      clientSlipsMap: {},
      selfBetsList: [],
      activeClientKey: null,
      payoutSliderVal: 30,
      zodiacConfig: {
        1: { zh: "鼠", en: "Rat", numbers: [1, 13, 25, 37] },
        2: { zh: "牛", en: "Ox", numbers: [2, 14, 26, 38] },
        3: { zh: "虎", en: "Tiger", numbers: [3, 15, 27, 39] },
        4: { zh: "兔", en: "Rabbit", numbers: [4, 16, 28, 40] },
        5: { zh: "龙", en: "Dragon", numbers: [5, 17, 29, 41] },
        6: { zh: "蛇", en: "Snake", numbers: [6, 18, 30, 42] },
        7: { zh: "马", en: "Horse", numbers: [7, 19, 31, 43] },
        8: { zh: "羊", en: "Goat", numbers: [8, 20, 32, 44] },
        9: { zh: "猴", en: "Monkey", numbers: [9, 21, 33, 45] },
        10: { zh: "鸡", en: "Rooster", numbers: [10, 22, 34, 46] },
        11: { zh: "狗", en: "Dog", numbers: [11, 23, 35, 47] },
        12: { zh: "猪", en: "Pig", numbers: [12, 24, 36, 48] }
      },
      rulesConfig: [
        { id: "TM", name_zh: "特码", name_en: "Special Number", category: "only_mn", ratio: 50.0 },
        { id: "TX", name_zh: "特肖", name_en: "Special Zodiac", category: "only_mn", ratio: 50.0 },
        { id: "TMDS", name_zh: "特码单双", name_en: "Special Odd/Even", category: "only_mn", ratio: 1.0 },
        { id: "DX", name_zh: "特码大小", name_en: "Special Big/Small", category: "only_mn", ratio: 1.0 },
        { id: "PTYX", name_zh: "平特一肖", name_en: "Flat Zodiac", category: "all_7", ratio: 1.0 },
        { id: "2LX", name_zh: "二连肖", name_en: "2 Zodiac Combo", category: "all_7", ratio: 3.0 },
        { id: "3LX", name_zh: "三连肖", name_en: "3 Zodiac Combo", category: "all_7", ratio: 10.0 },
        { id: "4LX", name_zh: "四连肖", name_en: "4 Zodiac Combo", category: "all_7", ratio: 300.0 },
        { id: "2Z2", name_zh: "二中二", name_en: "2 Numbers Combo", category: "first_6", ratio: 60.0 },
        { id: "3Z3", name_zh: "三中三", name_en: "3 Numbers Combo", category: "first_6", ratio: 600.0 },
        { id: "DP", name_zh: "单平/正码", name_en: "Regular Number", category: "first_6", ratio: 6.0 }
      ]
    };

    this.i18n = {
      zh: {
        brandTitle: "Lucky48 庄家总控与结算管理平台",
        brandSub: "HOST CONTROL & PAYOUT SETTLEMENT",
        btnLang: "Switch to English",
        openMobile: "打开手机端",
        tab1: "开奖生成与控盘",
        tab2: "汇总所有客户注单",
        tab3: "导入客户注单分标签",
        tab4: "庄家自投录单",
        tab5: "玩法概率与生肖设置",
        tab6: "报表结算与导出",
        statTotalIn: "总受注额 (Total Bet Pool)",
        statTargetPayout: "目标开奖赔付 (Target Payout)",
        statActualPayout: "本次实际赔付 (Actual Payout)",
        statHouseProfit: "庄家净盈亏 (House Net Profit)",
        engineTitle: "7个开奖号码控盘生成引擎 (1-48码 / 12生肖)",
        unlockAll: "解锁所有手选码",
        resetDraw: "重置开奖码",
        sliderTitle: "控盘目标赔付比例调节杆 (1-100 Level)",
        autoGen: "自动控盘生成 7 个号码",
        fairGen: "完全随机纯净生成",
        settleAll: "一键全盘开奖结算",
        settlePreview: "结算明细汇总预览",
        masterTableTitle: "全盘客户注单综合总表",
        exportCsv: "导出 CSV",
        exportJson: "导出 JSON",
        clientImportTitle: "客户注单文件导入",
        batchImport: "批量导入 (JSON/CSV)",
        clearData: "清空数据",
        selfInputTitle: "庄家直接手工录入注单",
        clientNameLbl: "客户姓名",
        gameTypeLbl: "玩法选择",
        betAmtLbl: "投注金额",
        addSelfBtn: "确认录入该注",
        rulesTitle: "玩法赔率设置",
        zodiacTitle: "12生肖设置",
        reportsTitle: "结算总报表",
        repTotalBet: "今日总受注额",
        repTotalPay: "今日总赔付额",
        repNetProfit: "庄家纯利润",
        fTotalCount: "总注数",
        fTotalBet: "总下注额",
        fHouseProfit: "庄家净利",
        systemActive: "System Active | Enterprise Engine v2.0",
        tableClient: "客户/设备",
        tableCount: "注数",
        tableTotalBet: "投注总额",
        tableWinTotal: "中奖总额",
        tableClientPL: "客户盈亏",
        tableHousePL: "庄家盈亏",
        tableWinRate: "中奖率",
        masterThSeq: "序号",
        masterThClient: "客户姓名",
        masterThDevice: "设备编号",
        masterThTime: "时间",
        masterThType: "玩法",
        masterThContent: "投注内容",
        masterThAmt: "投注额",
        masterThRatio: "赔率",
        masterThMaxBonus: "最高奖金",
        masterThResult: "结果",
        masterThPL: "盈亏",
        rulesThCode: "代码",
        rulesThName: "名称",
        rulesThCat: "类别",
        rulesThRatio: "赔率",
        zodiacThID: "ID",
        zodiacThZh: "中文",
        zodiacThEn: "英文",
        zodiacThNums: "号码",
        removeBtn: "删除"
      },
      en: {
        brandTitle: "Lucky48 Host Control & Settlement Platform",
        brandSub: "HOST CONTROL & PAYOUT SETTLEMENT",
        btnLang: "切换到中文",
        openMobile: "Open Mobile View",
        tab1: "Draw Generator & Control",
        tab2: "Master Bets Summary",
        tab3: "Client Slips Management",
        tab4: "Host Manual Entry",
        tab5: "Rules & Zodiac Config",
        tab6: "Reports & Settlement",
        statTotalIn: "Total Bet Pool",
        statTargetPayout: "Target Payout",
        statActualPayout: "Actual Payout",
        statHouseProfit: "House Net Profit",
        engineTitle: "7-Number Draw Control Engine (1-48 Balls / 12 Zodiacs)",
        unlockAll: "Unlock All Slots",
        resetDraw: "Reset Draw",
        sliderTitle: "Target Payout Ratio Slider (1-100 Level)",
        autoGen: "Auto-Generate Controlled Draw",
        fairGen: "Pure Random Fair Draw",
        settleAll: "One-Click Settlement",
        settlePreview: "Settlement Summary Preview",
        masterTableTitle: "Comprehensive Master Bets Table",
        exportCsv: "Export CSV",
        exportJson: "Export JSON",
        clientImportTitle: "Client Slips Import",
        batchImport: "Batch Import (JSON/CSV)",
        clearData: "Clear Data",
        selfInputTitle: "Host Direct Manual Slip Entry",
        clientNameLbl: "Client Name",
        gameTypeLbl: "Game Type",
        betAmtLbl: "Bet Amount",
        addSelfBtn: "Confirm & Add Slip",
        rulesTitle: "Rules & Odds Settings",
        zodiacTitle: "12 Zodiacs Configuration",
        reportsTitle: "Settlement Reports",
        repTotalBet: "Today Total Bets",
        repTotalPay: "Today Total Payouts",
        repNetProfit: "House Net Profit",
        fTotalCount: "Total Slips",
        fTotalBet: "Total Bet Amount",
        fHouseProfit: "House Net Profit",
        systemActive: "System Active | Enterprise Engine v2.0",
        tableClient: "Client / Device",
        tableCount: "Count",
        tableTotalBet: "Total Bet",
        tableWinTotal: "Total Payout",
        tableClientPL: "Client P/L",
        tableHousePL: "House P/L",
        tableWinRate: "Win Rate",
        masterThSeq: "No.",
        masterThClient: "Client Name",
        masterThDevice: "Device ID",
        masterThTime: "Time",
        masterThType: "Game Type",
        masterThContent: "Selection",
        masterThAmt: "Bet Amt",
        masterThRatio: "Ratio",
        masterThMaxBonus: "Max Bonus",
        masterThResult: "Result",
        masterThPL: "P/L",
        rulesThCode: "Code",
        rulesThName: "Name",
        rulesThCat: "Category",
        rulesThRatio: "Ratio",
        zodiacThID: "ID",
        zodiacThZh: "Chinese",
        zodiacThEn: "English",
        zodiacThNums: "Numbers",
        removeBtn: "Remove"
      }
    };

    this.loadFromStorage();
    this.initDOM();
    this.bindEvents();
    this.settleAll();
  }

  loadFromStorage() {
    try {
      this.state.clientSlipsMap = {};
      this.state.selfBetsList = [];

      const storageKeys = ['lucky48_slips', 'lucky48_bets', 'lucky48_client_slips', 'lucky48_clients', 'lucky48_self_bets', 'bets', 'slips'];
      storageKeys.forEach(k => {
        const val = localStorage.getItem(k);
        if (val) {
          try {
            const parsed = JSON.parse(val);
            if (k.includes('self')) {
              if (Array.isArray(parsed)) this.state.selfBetsList = parsed;
            } else {
              if (Array.isArray(parsed)) {
                this.state.clientSlipsMap['web_default_client'] = {
                  clientName: "Web User",
                  deviceId: "WEB-USER-01",
                  bets: parsed
                };
              } else if (typeof parsed === 'object' && parsed !== null) {
                Object.assign(this.state.clientSlipsMap, parsed);
              }
            }
          } catch (err) {}
        }
      });

      if (Object.keys(this.state.clientSlipsMap).length === 0 && this.state.selfBetsList.length === 0) {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && !key.includes('host') && !key.includes('zodiac')) {
            const val = localStorage.getItem(key);
            try {
              const parsed = JSON.parse(val);
              if (Array.isArray(parsed) && parsed.length > 0 && (parsed[0].bet_type || parsed[0].bet_amount)) {
                this.state.clientSlipsMap[key] = {
                  clientName: "Client " + key,
                  deviceId: key,
                  bets: parsed
                };
              }
            } catch (e) {}
          }
        }
      }
    } catch (e) {}
  }

  saveToStorage() {
    try {
      localStorage.setItem('lucky48_self_bets', JSON.stringify(this.state.selfBetsList));
      localStorage.setItem('lucky48_client_slips', JSON.stringify(this.state.clientSlipsMap));
    } catch (e) {}
  }

  t(key) {
    return this.i18n[this.state.lang][key] || key;
  }

  getZodiac(num) { return ((num - 1) % 12) + 1; }

  getAllBets() {
    let bets = [...this.state.selfBetsList];
    Object.values(this.state.clientSlipsMap).forEach(c => {
      if (c && c.bets && Array.isArray(c.bets)) {
        bets = bets.concat(c.bets);
      } else if (c && Array.isArray(c)) {
        bets = bets.concat(c);
      }
    });
    return bets;
  }

  initDOM() {
    const dateInput = document.getElementById('host-draw-date');
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
    this.renderBallSlots();
    this.initSelfInputUI();
  }

  bindEvents() {
    const navTabs = document.getElementById('main-nav-tabs');
    if (navTabs) {
      navTabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.nav-tab-btn');
        if (!btn) return;
        document.querySelectorAll('.nav-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const targetPane = document.getElementById(btn.dataset.tab);
        if (targetPane) targetPane.classList.add('active');
      });
    }

    const btnLang = document.getElementById('btn-lang');
    if (btnLang) {
      btnLang.addEventListener('click', () => {
        this.state.lang = this.state.lang === 'zh' ? 'en' : 'zh';
        this.applyTranslations();
        this.renderAll();
      });
    }

    const slider = document.getElementById('payout-slider');
    if (slider) {
      slider.addEventListener('input', (e) => {
        this.state.payoutSliderVal = parseInt(e.target.value);
        const disp = document.getElementById('slider-display-val');
        if (disp) disp.innerText = `${this.state.payoutSliderVal}%`;
        this.updateMetrics();
      });
    }

    const runGen = document.getElementById('btn-run-gen');
    if (runGen) runGen.addEventListener('click', () => this.generateOptimizedDraw());

    const runFair = document.getElementById('btn-run-fair');
    if (runFair) runFair.addEventListener('click', () => this.generateFairDraw());

    const settleAllBtn = document.getElementById('btn-settle-all');
    if (settleAllBtn) settleAllBtn.addEventListener('click', () => this.settleAll());

    const resetDraw = document.getElementById('btn-reset-draw');
    if (resetDraw) {
      resetDraw.addEventListener('click', () => {
        this.state.drawNumbers = null;
        this.settleAll();
      });
    }

    const unlockAll = document.getElementById('btn-unlock-all');
    if (unlockAll) {
      unlockAll.addEventListener('click', () => {
        this.state.lockedSlots = {};
        this.renderBallSlots();
      });
    }

    const triggerUpload = document.getElementById('btn-trigger-upload');
    const batchFile = document.getElementById('host-batch-file');
    if (triggerUpload && batchFile) {
      triggerUpload.addEventListener('click', () => batchFile.click());
      batchFile.addEventListener('change', (e) => this.handleBatchUpload(e));
    }

    const clearClients = document.getElementById('btn-clear-clients');
    if (clearClients) {
      clearClients.addEventListener('click', () => {
        if (confirm(this.state.lang === 'zh' ? '是否确定清空客户数据？' : 'Are you sure to clear client data?')) {
          this.state.clientSlipsMap = {};
          this.state.selfBetsList = [];
          this.state.activeClientKey = null;
          this.saveToStorage();
          this.settleAll();
        }
      });
    }

    const addSelfBetBtn = document.getElementById('btn-add-self-bet');
    if (addSelfBetBtn) addSelfBetBtn.addEventListener('click', () => this.addSelfBet());

    const selfGameType = document.getElementById('host-self-gametype');
    if (selfGameType) {
      selfGameType.addEventListener('change', () => this.renderSelfPickArea());
    }

    const exportCsvBtn = document.getElementById('btn-export-csv');
    if (exportCsvBtn) {
      exportCsvBtn.addEventListener('click', () => this.exportCSV());
    }

    const exportJsonBtn = document.getElementById('btn-export-json');
    if (exportJsonBtn) {
      exportJsonBtn.addEventListener('click', () => this.exportJSON());
    }

    window.addEventListener('storage', () => {
      this.loadFromStorage();
      this.settleAll();
    });
  }

  applyTranslations() {
    const brandTitleEl = document.querySelector('.brand div div:nth-child(1)');
    if (brandTitleEl) brandTitleEl.innerText = this.t('brandTitle');

    const brandSubEl = document.querySelector('.brand div div:nth-child(2)');
    if (brandSubEl) brandSubEl.innerText = this.t('brandSub');

    const btnLang = document.getElementById('btn-lang');
    if (btnLang) btnLang.innerText = this.t('btnLang');

    const mobileLink = document.querySelector('header a.btn-gold span');
    if (mobileLink) mobileLink.innerText = this.t('openMobile');

    const tabs = document.querySelectorAll('.nav-tab-btn');
    const tabKeys = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6'];
    tabs.forEach((tab, idx) => {
      const span = tab.querySelector('span');
      if (span && tabKeys[idx]) {
        span.innerText = this.t(tabKeys[idx]);
      }
    });

    const statTitles = document.querySelectorAll('.stat-box .title');
    if (statTitles.length >= 4) {
      statTitles[0].innerText = this.t('statTotalIn');
      statTitles[1].innerText = this.t('statTargetPayout');
      statTitles[2].innerText = this.t('statActualPayout');
      statTitles[3].innerText = this.t('statHouseProfit');
    }

    const engineTitle = document.querySelector('#tab-draw-gen .card:nth-child(2) .card-title span');
    if (engineTitle) engineTitle.innerText = this.t('engineTitle');

    const btnUnlock = document.getElementById('btn-unlock-all');
    if (btnUnlock) btnUnlock.innerText = this.t('unlockAll');

    const btnReset = document.getElementById('btn-reset-draw');
    if (btnReset) btnReset.innerText = this.t('resetDraw');

    const sliderStrong = document.querySelector('.slider-box strong');
    if (sliderStrong) sliderStrong.innerText = this.t('sliderTitle');

    const btnRunGen = document.getElementById('btn-run-gen');
    if (btnRunGen) btnRunGen.innerText = this.t('autoGen');

    const btnRunFair = document.getElementById('btn-run-fair');
    if (btnRunFair) btnRunFair.innerText = this.t('fairGen');

    const btnSettleAll = document.getElementById('btn-settle-all');
    if (btnSettleAll) btnSettleAll.innerText = this.t('settleAll');

    const settlePrevCard = document.querySelector('#tab-draw-gen .card:nth-child(3) .card-title');
    if (settlePrevCard) settlePrevCard.innerText = this.t('settlePreview');

    const masterTitle = document.querySelector('#tab-combined .card-title span');
    if (masterTitle) masterTitle.innerText = this.t('masterTableTitle');

    const exportCsv = document.getElementById('btn-export-csv');
    if (exportCsv) exportCsv.innerText = this.t('exportCsv');

    const exportJson = document.getElementById('btn-export-json');
    if (exportJson) exportJson.innerText = this.t('exportJson');

    const clientImportTitle = document.querySelector('#tab-clients .card-title span');
    if (clientImportTitle) clientImportTitle.innerText = this.t('clientImportTitle');

    const btnTriggerUpload = document.getElementById('btn-trigger-upload');
    if (btnTriggerUpload) btnTriggerUpload.innerText = this.t('batchImport');

    const btnClearClients = document.getElementById('btn-clear-clients');
    if (btnClearClients) btnClearClients.innerText = this.t('clearData');

    const selfInputTitle = document.querySelector('#tab-self .card-title');
    if (selfInputTitle) selfInputTitle.innerText = this.t('selfInputTitle');

    const selfLabels = document.querySelectorAll('#tab-self label');
    if (selfLabels.length >= 3) {
      selfLabels[0].innerText = this.t('clientNameLbl');
      selfLabels[1].innerText = this.t('gameTypeLbl');
      selfLabels[2].innerText = this.t('betAmtLbl');
    }

    const btnAddSelf = document.getElementById('btn-add-self-bet');
    if (btnAddSelf) btnAddSelf.innerText = this.t('addSelfBtn');

    const ruleCards = document.querySelectorAll('#tab-rules .card');
    if (ruleCards.length >= 2) {
      ruleCards[0].querySelector('.card-title').innerText = this.t('rulesTitle');
      ruleCards[1].querySelector('.card-title').innerText = this.t('zodiacTitle');
    }

    const reportCardTitle = document.querySelector('#tab-reports .card-title');
    if (reportCardTitle) reportCardTitle.innerText = this.t('reportsTitle');

    const repTitles = document.querySelectorAll('#tab-reports .stat-box .title');
    if (repTitles.length >= 3) {
      repTitles[0].innerText = this.t('repTotalBet');
      repTitles[1].innerText = this.t('repTotalPay');
      repTitles[2].innerText = this.t('repNetProfit');
    }

    const footerLabels = document.querySelectorAll('footer span');
    if (footerLabels.length >= 3) {
      footerLabels[0].innerText = this.t('fTotalCount');
      footerLabels[1].innerText = this.t('fTotalBet');
      footerLabels[2].innerText = this.t('fHouseProfit');
    }

    const footerSystem = document.querySelector('footer div:last-child');
    if (footerSystem) footerSystem.innerText = this.t('systemActive');
  }

  renderBallSlots() {
    const container = document.getElementById('draw-slots-container');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 7; i++) {
      const isMn = (i === 6);
      const isLocked = (i in this.state.lockedSlots);
      const num = isLocked ? this.state.lockedSlots[i] : (this.state.drawNumbers ? this.state.drawNumbers[i] : '?');

      const slotDiv = document.createElement('div');
      slotDiv.className = 'ball-slot';
      slotDiv.innerHTML = `
        <div class="ball-slot-num ${isMn ? 'mn' : ''} ${isLocked ? 'locked' : ''}" data-slot="${i}">${num}</div>
        <div style="font-size:11px; color:var(--text-muted); font-weight:600;">${isMn ? (this.state.lang === 'zh' ? '★ 特码' : '★ Special') : (this.state.lang === 'zh' ? '正码 ' + (i + 1) : 'Regular ' + (i + 1))}</div>
      `;
      slotDiv.querySelector('.ball-slot-num').addEventListener('click', () => this.promptLockSlot(i));
      container.appendChild(slotDiv);
    }
  }

  promptLockSlot(idx) {
    const current = this.state.lockedSlots[idx] || '';
    const msg = this.state.lang === 'zh' ? '请输入锁定号码 (1-48)，留空取消：' : 'Enter lock number (1-48), leave blank to cancel:';
    const input = prompt(msg, current);
    if (input === null || input.trim() === '') {
      delete this.state.lockedSlots[idx];
    } else {
      const val = parseInt(input.trim());
      if (isNaN(val) || val < 1 || val > 48) {
        alert(this.state.lang === 'zh' ? '请输入 1-48 之间的有效数字' : 'Please enter a valid number between 1 and 48');
        return;
      }
      this.state.lockedSlots[idx] = val;
    }
    this.renderBallSlots();
  }

  generateOptimizedDraw() {
    const allBets = this.getAllBets();
    const totalPool = allBets.reduce((sum, b) => sum + (b.bet_amount || b.bet_unit || 0), 0);
    const targetPayout = totalPool * (this.state.payoutSliderVal / 100);

    const lockedVals = new Set(Object.values(this.state.lockedSlots));
    const availablePool = Array.from({ length: 48 }, (_, i) => i + 1).filter(n => !lockedVals.has(n));

    const sample = () => {
      const shuffled = [...availablePool].sort(() => 0.5 - Math.random());
      const res = new Array(7);
      let pIdx = 0;
      for (let i = 0; i < 7; i++) {
        res[i] = (i in this.state.lockedSlots) ? this.state.lockedSlots[i] : shuffled[pIdx++];
      }
      return res;
    };

    if (allBets.length === 0) {
      this.state.drawNumbers = sample();
      this.settleAll();
      return;
    }

    let bestDraw = null, minDiff = Infinity;
    for (let i = 0; i < 1500; i++) {
      const cand = sample();
      const candPayout = this.evaluatePayout(allBets, cand);
      const diff = Math.abs(candPayout - targetPayout);
      if (diff < minDiff) {
        minDiff = diff;
        bestDraw = cand;
      }
    }
    this.state.drawNumbers = bestDraw;
    this.settleAll();
  }

  generateFairDraw() {
    const lockedVals = new Set(Object.values(this.state.lockedSlots));
    const availablePool = Array.from({ length: 48 }, (_, i) => i + 1).filter(n => !lockedVals.has(n));
    const shuffled = availablePool.sort(() => 0.5 - Math.random());
    
    const res = new Array(7);
    let pIdx = 0;
    for (let i = 0; i < 7; i++) {
      res[i] = (i in this.state.lockedSlots) ? this.state.lockedSlots[i] : shuffled[pIdx++];
    }
    this.state.drawNumbers = res;
    this.settleAll();
  }

  evaluatePayout(bets, draw) {
    const first6 = new Set(draw.slice(0, 6));
    const mn = draw[6];
    const allZodiacs = new Set(draw.map(n => this.getZodiac(n)));
    const mnZodiac = this.getZodiac(mn);
    let total = 0;

    for (let b of bets) {
      let won = false;
      const bAmt = b.bet_amount || b.bet_unit || 0;
      const bRatio = b.pay_ratio || 50;
      const cat = b.category || "only_mn";
      const bType = b.bet_type || "TM";
      const sel = b.selection;

      if (cat === "only_mn") {
        if (bType === "TM") won = (mn === parseInt(sel));
        else if (bType === "TX") won = (mnZodiac === parseInt(sel));
        else if (bType === "TMDS") won = (sel === "单" || sel === "Odd") ? (mn % 2 !== 0) : (mn % 2 === 0);
        else if (bType === "DX") won = (sel === "大" || sel === "Big") ? (mn >= 25) : (mn <= 24);
      } else if (cat === "all_7") {
        if (bType === "PTYX") won = allZodiacs.has(parseInt(sel));
        else if (["2LX", "3LX", "4LX"].includes(bType)) {
          const arr = Array.isArray(sel) ? sel : [sel];
          won = arr.every(z => allZodiacs.has(parseInt(z)));
        }
      } else if (cat === "first_6") {
        if (bType === "DP") won = first6.has(parseInt(sel));
        else if (["2Z2", "3Z3"].includes(bType)) {
          const arr = Array.isArray(sel) ? sel : [sel];
          won = arr.every(n => first6.has(parseInt(n)));
        }
      }
      if (won) total += (bAmt * bRatio);
    }
    return total;
  }

  settleAll() {
    const allBets = this.getAllBets();
    if (this.state.drawNumbers) {
      const draw = this.state.drawNumbers;
      const first6 = new Set(draw.slice(0, 6));
      const mn = draw[6];
      const allZodiacs = new Set(draw.map(n => this.getZodiac(n)));
      const mnZodiac = this.getZodiac(mn);

      allBets.forEach(b => {
        let won = false;
        const cat = b.category || "only_mn";
        const bType = b.bet_type || "TM";
        const sel = b.selection;
        const bAmt = b.bet_amount || b.bet_unit || 0;
        const bRatio = b.pay_ratio || 50;

        if (cat === "only_mn") {
          if (bType === "TM") won = (mn === parseInt(sel));
          else if (bType === "TX") won = (mnZodiac === parseInt(sel));
          else if (bType === "TMDS") won = (sel === "单" || sel === "Odd") ? (mn % 2 !== 0) : (mn % 2 === 0);
          else if (bType === "DX") won = (sel === "大" || sel === "Big") ? (mn >= 25) : (mn <= 24);
        } else if (cat === "all_7") {
          if (bType === "PTYX") won = allZodiacs.has(parseInt(sel));
          else if (["2LX", "3LX", "4LX"].includes(bType)) {
            const arr = Array.isArray(sel) ? sel : [sel];
            won = arr.every(z => allZodiacs.has(parseInt(z)));
          }
        } else if (cat === "first_6") {
          if (bType === "DP") won = first6.has(parseInt(sel));
          else if (["2Z2", "3Z3"].includes(bType)) {
            const arr = Array.isArray(sel) ? sel : [sel];
            won = arr.every(n => first6.has(parseInt(n)));
          }
        }
        b.settled = true;
        b.won = won;
        b.payout = won ? (bAmt * bRatio) : 0;
        b.net_profit = won ? (b.payout - bAmt) : -bAmt;
      });
    } else {
      allBets.forEach(b => { delete b.settled; delete b.won; delete b.payout; delete b.net_profit; });
    }
    this.renderAll();
  }

  updateMetrics() {
    const allBets = this.getAllBets();
    const totalPool = allBets.reduce((s, b) => s + (b.bet_amount || b.bet_unit || 0), 0);
    let actualPayout = 0, playerProfit = 0;

    if (this.state.drawNumbers) {
      allBets.forEach(b => {
        if (b.settled) {
          actualPayout += b.payout || 0;
          playerProfit += b.net_profit || 0;
        }
      });
    }

    const houseNet = -playerProfit;
    
    const totalInEl = document.getElementById('m-val-total-in');
    if (totalInEl) totalInEl.innerText = `¥${totalPool.toFixed(2)}`;

    const targetPayEl = document.getElementById('m-val-target-payout');
    if (targetPayEl) targetPayEl.innerText = `¥${(totalPool * (this.state.payoutSliderVal / 100)).toFixed(2)}`;

    const actualPayEl = document.getElementById('m-val-actual-payout');
    if (actualPayEl) actualPayEl.innerText = this.state.drawNumbers ? `¥${actualPayout.toFixed(2)}` : '--';
    
    const netEl = document.getElementById('m-val-house-profit');
    if (netEl) {
      netEl.innerText = this.state.drawNumbers ? `${houseNet >= 0 ? '+' : ''}¥${houseNet.toFixed(2)}` : '--';
      netEl.style.color = houseNet >= 0 ? 'var(--accent-green)' : 'var(--accent-red)';
    }

    const fTotalCount = document.getElementById('f-total-count');
    if (fTotalCount) fTotalCount.innerText = allBets.length;

    const fTotalBet = document.getElementById('f-total-bet');
    if (fTotalBet) fTotalBet.innerText = `¥${totalPool.toFixed(2)}`;

    const fHouseProfit = document.getElementById('f-house-profit');
    if (fHouseProfit) fHouseProfit.innerText = this.state.drawNumbers ? `¥${houseNet.toFixed(2)}` : '--';

    const badgeAllBets = document.getElementById('badge-all-bets');
    if (badgeAllBets) badgeAllBets.innerText = allBets.length;

    const badgeClients = document.getElementById('badge-clients-count');
    if (badgeClients) badgeClients.innerText = Object.keys(this.state.clientSlipsMap).length;
  }

  renderAll() {
    this.renderBallSlots();
    this.updateMetrics();
    this.renderMasterTable();
    this.renderQuickSettleTable();
    this.renderClientSubtabs();
    this.renderRulesAndZodiac();
  }

  renderMasterTable() {
    const masterThead = document.querySelector('#tab-combined .data-table thead tr');
    if (masterThead) {
      masterThead.innerHTML = `
        <th>${this.t('masterThSeq')}</th>
        <th>${this.t('masterThClient')}</th>
        <th>${this.t('masterThDevice')}</th>
        <th>${this.t('masterThTime')}</th>
        <th>${this.t('masterThType')}</th>
        <th>${this.t('masterThContent')}</th>
        <th>${this.t('masterThAmt')}</th>
        <th>${this.t('masterThRatio')}</th>
        <th>${this.t('masterThMaxBonus')}</th>
        <th>${this.t('masterThResult')}</th>
        <th>${this.t('masterThPL')}</th>
        <th>Action</th>
      `;
    }

    const tbody = document.getElementById('master-bets-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    let combinedItems = [];
    this.state.selfBetsList.forEach((b, idx) => {
      combinedItems.push({ type: 'self', index: idx, bet: b });
    });
    Object.entries(this.state.clientSlipsMap).forEach(([cKey, cObj]) => {
      const betsArr = cObj.bets || (Array.isArray(cObj) ? cObj : []);
      betsArr.forEach((b, bIdx) => {
        combinedItems.push({ type: 'client', clientKey: cKey, betIndex: bIdx, bet: b });
      });
    });

    combinedItems.forEach((item, idx) => {
      const b = item.bet;
      const tr = document.createElement('tr');
      const selStr = Array.isArray(b.selection) ? b.selection.join(', ') : b.selection;
      const bAmt = b.bet_amount || b.bet_unit || 0;
      const bRatio = b.pay_ratio || 50;

      let statusStr = `<span style="color:var(--text-muted);">${this.state.lang === 'zh' ? '待开奖' : 'Pending'}</span>`;
      if (b.settled) {
        statusStr = b.won 
          ? `<span style="color:var(--accent-green); font-weight:700;">+¥${b.payout.toFixed(2)} (${this.state.lang === 'zh' ? '中奖' : 'Won'})</span>`
          : `<span style="color:var(--accent-red);">${this.state.lang === 'zh' ? '未中' : 'Lost'}</span>`;
      }

      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td><strong>${this.escapeHtml(b.client || b.client_name || 'Anonymous')}</strong></td>
        <td>${b.device_id || '--'}</td>
        <td>${(b.timestamp || '').split('T')[0] || ''}</td>
        <td>${b.bet_type || 'TM'}</td>
        <td style="color:var(--accent-gold); font-weight:700;">${selStr}</td>
        <td>¥${bAmt.toFixed(2)}</td>
        <td>1:${bRatio}</td>
        <td>¥${(bAmt * bRatio).toFixed(2)}</td>
        <td>${statusStr}</td>
        <td>${b.settled ? (b.net_profit >= 0 ? '+' : '') + b.net_profit.toFixed(2) : '--'}</td>
        <td><button class="btn btn-sm" style="background:var(--accent-red); color:#fff; padding:2px 8px; border:none; border-radius:4px; cursor:pointer;">${this.t('removeBtn')}</button></td>
      `;

      tr.querySelector('button').addEventListener('click', () => {
        if (confirm(this.state.lang === 'zh' ? '是否确认删除此注单？' : 'Are you sure to remove this bet?')) {
          if (item.type === 'self') {
            this.state.selfBetsList.splice(item.index, 1);
          } else if (item.type === 'client') {
            const targetObj = this.state.clientSlipsMap[item.clientKey];
            if (targetObj.bets) {
              targetObj.bets.splice(item.betIndex, 1);
              if (targetObj.bets.length === 0) delete this.state.clientSlipsMap[item.clientKey];
            } else if (Array.isArray(targetObj)) {
              targetObj.splice(item.betIndex, 1);
              if (targetObj.length === 0) delete this.state.clientSlipsMap[item.clientKey];
            }
          }
          this.saveToStorage();
          this.settleAll();
        }
      });

      tbody.appendChild(tr);
    });
  }

  renderQuickSettleTable() {
    const quickThead = document.querySelector('#tab-draw-gen .card:nth-child(3) .data-table thead tr');
    if (quickThead) {
      quickThead.innerHTML = `
        <th>${this.t('tableClient')}</th>
        <th>${this.t('tableCount')}</th>
        <th>${this.t('tableTotalBet')}</th>
        <th>${this.t('tableWinTotal')}</th>
        <th>${this.t('tableClientPL')}</th>
        <th>${this.t('tableHousePL')}</th>
        <th>${this.t('tableWinRate')}</th>
      `;
    }

    const tbody = document.getElementById('quick-settle-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    const sources = [];
    if (this.state.selfBetsList.length) sources.push({ name: this.state.lang === 'zh' ? '庄家自投' : 'Host Direct', bets: this.state.selfBetsList });
    Object.entries(this.state.clientSlipsMap).forEach(([k, c]) => {
      const cName = c.clientName || c.client_name || k;
      const cBets = c.bets || (Array.isArray(c) ? c : []);
      sources.push({ name: cName, bets: cBets });
    });

    sources.forEach(s => {
      let totalBet = 0, totalPay = 0;
      s.bets.forEach(b => {
        totalBet += (b.bet_amount || b.bet_unit || 0);
        if (b.settled) totalPay += b.payout || 0;
      });
      const houseNet = totalBet - totalPay;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${this.escapeHtml(s.name)}</strong></td>
        <td>${s.bets.length}</td>
        <td>¥${totalBet.toFixed(2)}</td>
        <td>¥${totalPay.toFixed(2)}</td>
        <td style="color:${(totalPay - totalBet) >= 0 ? 'var(--accent-green)' : 'var(--accent-red)'}">¥${(totalPay - totalBet).toFixed(2)}</td>
        <td style="color:${houseNet >= 0 ? 'var(--accent-green)' : 'var(--accent-red)'}">¥${houseNet.toFixed(2)}</td>
        <td>${s.bets.length ? ((s.bets.filter(x => x.won).length / s.bets.length) * 100).toFixed(1) + '%' : '0%'}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  handleBatchUpload(e) {
    const files = Array.from(e.target.files);
    let processed = 0;
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          if (file.name.endsWith('.json')) {
            const data = JSON.parse(evt.target.result);
            const key = data.device_id || file.name;
            this.state.clientSlipsMap[key] = {
              clientName: data.client_name || file.name.replace('.json', ''),
              deviceId: data.device_id || 'FILE-IMPORT',
              bets: data.bets || []
            };
          }
        } catch (err) {}
        processed++;
        if (processed === files.length) {
          this.saveToStorage();
          this.settleAll();
        }
      };
      reader.readAsText(file);
    });
  }

  renderClientSubtabs() {
    const row = document.getElementById('client-subtabs-row');
    if (!row) return;
    row.innerHTML = '';
    const keys = Object.keys(this.state.clientSlipsMap);
    if (!keys.length) return;
    if (!this.state.activeClientKey) this.state.activeClientKey = keys[0];

    keys.forEach(k => {
      const clientObj = this.state.clientSlipsMap[k];
      const cName = clientObj.clientName || clientObj.client_name || k;
      const wrapper = document.createElement('div');
      wrapper.style.display = 'inline-flex';
      wrapper.style.alignItems = 'center';
      wrapper.style.marginRight = '8px';
      wrapper.style.marginBottom = '8px';

      const btn = document.createElement('button');
      btn.className = `client-tab-btn ${k === this.state.activeClientKey ? 'active' : ''}`;
      btn.style.borderTopRightRadius = '0';
      btn.style.borderBottomRightRadius = '0';
      btn.innerText = `👤 ${cName}`;
      btn.addEventListener('click', () => {
        this.state.activeClientKey = k;
        this.renderClientSubtabs();
      });

      const removeBtn = document.createElement('button');
      removeBtn.className = 'btn btn-sm';
      removeBtn.style.background = 'var(--accent-red)';
      removeBtn.style.color = '#fff';
      removeBtn.style.border = 'none';
      removeBtn.style.borderTopLeftRadius = '0';
      removeBtn.style.borderBottomLeftRadius = '0';
      removeBtn.style.padding = '6px 10px';
      removeBtn.innerText = '✕';
      removeBtn.title = this.t('removeBtn');
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(this.state.lang === 'zh' ? `是否确认移除客户: ${cName}?` : `Remove client: ${cName}?`)) {
          delete this.state.clientSlipsMap[k];
          if (this.state.activeClientKey === k) {
            const remainingKeys = Object.keys(this.state.clientSlipsMap);
            this.state.activeClientKey = remainingKeys.length ? remainingKeys[0] : null;
          }
          this.saveToStorage();
          this.settleAll();
        }
      });

      wrapper.appendChild(btn);
      wrapper.appendChild(removeBtn);
      row.appendChild(wrapper);
    });
  }

  initSelfInputUI() {
    const sel = document.getElementById('host-self-gametype');
    if (!sel) return;
    sel.innerHTML = '';
    this.state.rulesConfig.forEach(r => {
      const opt = document.createElement('option');
      opt.value = r.id;
      opt.innerText = `${this.state.lang === 'zh' ? r.name_zh : r.name_en} (1:${r.ratio})`;
      sel.appendChild(opt);
    });
    this.renderSelfPickArea();
  }

  renderSelfPickArea() {
    const area = document.getElementById('host-self-pick-area');
    if (!area) return;
    const placeholder = this.state.lang === 'zh' ? '输入投注内容 (如: 12 或 1,2,3)' : 'Enter bet selection (e.g. 12 or 1,2,3)';
    area.innerHTML = `<input type="text" id="host-self-selection" placeholder="${placeholder}" class="form-control">`;
  }

  addSelfBet() {
    const gId = document.getElementById('host-self-gametype').value;
    const rule = this.state.rulesConfig.find(r => r.id === gId);
    const selInput = document.getElementById('host-self-selection');
    const selVal = selInput ? selInput.value.trim() : '';
    const amtInput = document.getElementById('host-self-amt');
    const amt = amtInput ? parseFloat(amtInput.value) || 10 : 10;
    const clientInput = document.getElementById('host-self-client');
    const client = clientInput && clientInput.value ? clientInput.value : (this.state.lang === 'zh' ? '现场客户' : 'Onsite Client');

    if (!selVal) return alert(this.state.lang === 'zh' ? '请输入投注内容' : 'Please enter bet selection');

    this.state.selfBetsList.push({
      line: this.state.selfBetsList.length + 1,
      client: client,
      device_id: 'HOST-CONSOLE',
      bet_type: rule.id,
      category: rule.category,
      selection: selVal.includes(',') ? selVal.split(',').map(Number) : selVal,
      pay_ratio: rule.ratio,
      bet_amount: amt,
      timestamp: new Date().toISOString()
    });

    this.saveToStorage();
    this.settleAll();
  }

  exportCSV() {
    const bets = this.getAllBets();
    let csv = 'No.,Client,Device,Time,Type,Selection,Amount,Ratio,Result,P/L\n';
    bets.forEach((b, i) => {
      csv += `${i+1},"${b.client || ''}","${b.device_id || ''}","${b.timestamp || ''}","${b.bet_type}","${Array.isArray(b.selection)?b.selection.join(';'):b.selection}",${b.bet_amount || b.bet_unit || 0},${b.pay_ratio || 50},${b.won ? 'Won' : 'Lost'},${b.net_profit || 0}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lucky48_report.csv';
    a.click();
  }

  exportJSON() {
    const data = {
      self_bets: this.state.selfBetsList,
      client_slips: this.state.clientSlipsMap,
      draw_numbers: this.state.drawNumbers
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lucky48_data.json';
    a.click();
  }

  renderRulesAndZodiac() {
    const rThead = document.querySelector('#tab-rules .card:nth-child(1) .data-table thead tr');
    if (rThead) {
      rThead.innerHTML = `<th>${this.t('rulesThCode')}</th><th>${this.t('rulesThName')}</th><th>${this.t('rulesThCat')}</th><th>${this.t('rulesThRatio')}</th>`;
    }

    const rTbody = document.getElementById('rules-settings-tbody');
    if (rTbody) {
      rTbody.innerHTML = '';
      this.state.rulesConfig.forEach(r => {
        const name = this.state.lang === 'zh' ? r.name_zh : r.name_en;
        rTbody.innerHTML += `<tr><td><strong>${r.id}</strong></td><td>${name}</td><td>${r.category}</td><td>1:${r.ratio}</td></tr>`;
      });
    }

    const zThead = document.querySelector('#tab-rules .card:nth-child(2) .data-table thead tr');
    if (zThead) {
      zThead.innerHTML = `<th>${this.t('zodiacThID')}</th><th>${this.t('zodiacThZh')}</th><th>${this.t('zodiacThEn')}</th><th>${this.t('zodiacThNums')}</th>`;
    }

    const zTbody = document.getElementById('zodiac-settings-tbody');
    if (zTbody) {
      zTbody.innerHTML = '';
      Object.entries(this.state.zodiacConfig).forEach(([id, z]) => {
        const zName = this.state.lang === 'zh' ? z.zh : z.en;
        zTbody.innerHTML += `<tr><td>Z${id}</td><td>${zName}</td><td>${z.en}</td><td>${z.numbers.join(', ')}</td></tr>`;
      });
    }
  }

  escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.appEngine = new Lucky48HostEngine();
});