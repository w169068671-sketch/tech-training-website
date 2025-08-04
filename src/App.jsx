import React, { useState } from 'react';
import { ChevronRight, Play, Download, BookOpen, Wrench, Zap, Cpu, Settings } from 'lucide-react';
import './App.css';

// 导入图片资源
import woodworkTools from './assets/woodwork_tools.jpg';
import metalworkTools from './assets/metalwork_tools.jpg';
import electronicsTools from './assets/electronics_tools.png';
import woodworkSteps from './assets/woodwork_sawing_steps.png';
import metalworkSteps from './assets/metalwork_drilling_steps.png';
import electronicsSteps from './assets/electronics_soldering_steps.png';
import woodworkCaseDesign from './assets/woodwork_case_design.png';
import metalworkCaseDesign from './assets/metalwork_case_design.png';
import electronicsCaseDesign from './assets/electronics_case_design.png';
import woodworkCaseFinished from './assets/woodwork_case_finished.png';
import metalworkCaseFinished from './assets/metalwork_case_finished.png';
import electronicsCaseFinished from './assets/electronics_case_finished.png';
import woodworkVideo from './assets/woodwork_sawing_demo.mp4';
import metalworkVideo from './assets/metalwork_drilling_demo.mp4';
import electronicsVideo from './assets/electronics_soldering_demo.mp4';

// 导入工具专栏资源
import woodworkToolsDetailed from './assets/woodwork_tools_detailed.png';
import metalworkToolsDetailed from './assets/metalwork_tools_detailed.png';
import electronicsToolsDetailed from './assets/electronics_tools_detailed.png';

// 导入新增木工案例资源
import shoeRackDesign from './assets/shoe_rack_design.png';
import shoeRackSteps from './assets/shoe_rack_steps.png';
import shoeRackFinished from './assets/shoe_rack_finished.png';
import bookshelfDesign from './assets/bookshelf_design.png';
import bookshelfSteps from './assets/bookshelf_steps.png';
import bookshelfFinished from './assets/bookshelf_finished.png';
import newspaperRackDesign from './assets/newspaper_rack_design.png';
import newspaperRackSteps from './assets/newspaper_rack_steps.png';
import newspaperRackFinished from './assets/newspaper_rack_finished.png';
import storageBoxDesign from './assets/storage_box_design.png';
import storageBoxSteps from './assets/storage_box_steps.png';
import storageBoxFinished from './assets/storage_box_finished.png';
import phoneStandImprovedDesign from './assets/phone_stand_improved_design.png';
import phoneStandImprovedSteps from './assets/phone_stand_improved_steps.png';
import phoneStandImprovedFinished from './assets/phone_stand_improved_finished.png';
import phoneStandImprovedDemo from './assets/phone_stand_improved_demo.mp4';

// 导入新增金工案例资源
import metalBookendDesign from './assets/metal_bookend_design.png';
import metalBookendSteps from './assets/metal_bookend_steps.png';
import metalBookendFinished from './assets/metal_bookend_finished.png';
import metalToolRackDesign from './assets/metal_tool_rack_design.png';
import metalToolRackSteps from './assets/metal_tool_rack_steps.png';
import metalToolRackFinished from './assets/metal_tool_rack_finished.png';
import metalPenHolderImprovedDesign from './assets/metal_pen_holder_improved_design.png';
import metalPenHolderImprovedSteps from './assets/metal_pen_holder_improved_steps.png';
import metalPenHolderImprovedFinished from './assets/metal_pen_holder_improved_finished.png';

const App = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: '培训概览', icon: BookOpen },
    { id: 'tools', title: '工具专栏', icon: Settings },
    { id: 'woodwork', title: '木工技术', icon: Wrench },
    { id: 'metalwork', title: '金工技术', icon: Zap },
    { id: 'electronics', title: '电子技术', icon: Cpu }
  ];

  const Header = () => (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-2">通用技术实践操作赛前培训</h1>
        <p className="text-xl opacity-90">王华军老师 - 3小时专业讲座</p>
        <p className="text-lg opacity-80 mt-2">涵盖木工、金工、电子三大领域的实践操作技能</p>
      </div>
    </header>
  );

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex space-x-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeSection === section.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{section.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );

  const OverviewSection = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">培训目标</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <Wrench className="text-blue-600 mb-3" size={32} />
            <h3 className="text-xl font-semibold mb-2">木工技能</h3>
            <p className="text-gray-600">掌握手工锯切割、榫卯连接等基础木工技能，学习工具规范使用</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <Zap className="text-blue-600 mb-3" size={32} />
            <h3 className="text-xl font-semibold mb-2">金工技能</h3>
            <p className="text-gray-600">学习金属加工工艺，包括钻孔、切割、打磨等操作技巧</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <Cpu className="text-blue-600 mb-3" size={32} />
            <h3 className="text-xl font-semibold mb-2">电子技能</h3>
            <p className="text-gray-600">掌握电路焊接、元件识别、电路板制作等电子制作技能</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">培训内容结构</h2>
        <div className="space-y-4">
          {[
            { title: '理论基础', content: '工具认识、安全规范、材料特性' },
            { title: '操作技能', content: '分解动作演示、实际操作练习' },
            { title: '实际案例', content: '完整项目制作、设计到成品' },
            { title: '竞赛要点', content: '评分标准、常见问题、应试技巧' }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ToolsSection = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">工具专栏</h2>
        <p className="text-lg text-gray-600 mb-6">详细介绍通用技术三大领域涉及的各种专业工具，包括使用方法、安全要点和选购建议</p>
      </div>

      {/* 木工工具 */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Wrench className="mr-3 text-blue-600" size={28} />
          木工工具大全
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">工具分类图解</h4>
            <img src={woodworkToolsDetailed} alt="木工工具详细分解图" className="w-full rounded-lg shadow-md" />
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">主要工具类别：</h5>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>手工工具：</strong>锯、刨、凿、锉、钻、量具、划线器</li>
                <li><strong>电动工具：</strong>电钻、磨光机、台锯、雕刻机</li>
                <li><strong>辅助工具：</strong>工作台、夹具、导轨、集尘器</li>
                <li><strong>测量工具：</strong>直尺、角尺、线勒子、卡尺</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">工具使用示例</h4>
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <img src={woodworkToolsDetailed} alt="木工工具使用示例" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-blue-800">安全要点：</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
                <li>使用前检查工具状态，确保刀具锋利</li>
                <li>佩戴护目镜和防尘口罩</li>
                <li>保持工作台整洁，避免杂物干扰</li>
                <li>电动工具使用时注意用电安全</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 金工工具 */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Zap className="mr-3 text-blue-600" size={28} />
          金工工具大全
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">工具分类图解</h4>
            <img src={metalworkToolsDetailed} alt="金工工具详细分解图" className="w-full rounded-lg shadow-md" />
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">主要工具类别：</h5>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>切割工具：</strong>金工锯、剪板机、等离子切割机</li>
                <li><strong>成型工具：</strong>锤子、砧板、弯管器、压力机</li>
                <li><strong>连接工具：</strong>焊接设备、铆接工具、螺栓紧固件</li>
                <li><strong>精加工工具：</strong>锉刀、砂纸、抛光机、钻床</li>
                <li><strong>测量工具：</strong>卡尺、千分尺、角度尺、划线器</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">使用演示视频</h4>
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <img src={metalworkToolsDetailed} alt="金工工具使用示例" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-yellow-800">安全要点：</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
                <li>焊接时佩戴防护面罩和手套</li>
                <li>使用切割工具时注意火花飞溅</li>
                <li>钻孔时使用冷却液防止过热</li>
                <li>保持工作环境通风良好</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 电子制作工具 */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Cpu className="mr-3 text-blue-600" size={28} />
          电子制作工具大全
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">工具分类图解</h4>
            <img src={electronicsToolsDetailed} alt="电子制作工具详细分解图" className="w-full rounded-lg shadow-md" />
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">主要工具类别：</h5>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>焊接工具：</strong>电烙铁、焊锡、助焊剂、吸锡器</li>
                <li><strong>测量工具：</strong>万用表、示波器、信号发生器</li>
                <li><strong>制作工具：</strong>面包板、PCB板、导线、元件盒</li>
                <li><strong>辅助工具：</strong>放大镜、镊子、剥线钳、热风枪</li>
                <li><strong>设计工具：</strong>电路设计软件、仿真软件</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">使用演示视频</h4>
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <img src={electronicsToolsDetailed} alt="电子制作工具使用示例" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="mt-4 bg-red-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-red-800">安全要点：</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                <li>焊接时注意烙铁温度，避免烫伤</li>
                <li>使用万用表时注意档位选择</li>
                <li>处理静电敏感元件时佩戴防静电手环</li>
                <li>保持工作台整洁，避免短路</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 工具选购建议 */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">工具选购建议</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-green-800">入门级配置</h4>
            <p className="text-sm text-green-700 mb-3">适合初学者和学校教学使用</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-green-600">
              <li>基础手工工具套装</li>
              <li>简易电动工具</li>
              <li>基本测量工具</li>
              <li>预算：500-1000元</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-blue-800">进阶级配置</h4>
            <p className="text-sm text-blue-700 mb-3">适合有一定基础的爱好者</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-600">
              <li>专业级手工工具</li>
              <li>多功能电动工具</li>
              <li>精密测量仪器</li>
              <li>预算：2000-5000元</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-purple-800">专业级配置</h4>
            <p className="text-sm text-purple-700 mb-3">适合专业工作室和竞赛</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-purple-600">
              <li>高端专业工具</li>
              <li>数控设备</li>
              <li>高精度仪器</li>
              <li>预算：10000元以上</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const TechSection = ({ title, description, toolsImage, stepsImage, videoSrc, cases }) => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">常用工具</h3>
            <img src={toolsImage} alt="工具展示" className="w-full rounded-lg shadow-md" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">教学视频</h3>
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <video 
                controls 
                className="w-full h-64 object-cover"
                poster={stepsImage}
              >
                <source src={videoSrc} type="video/mp4" />
                您的浏览器不支持视频播放
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">操作步骤分解</h3>
        <img src={stepsImage} alt="操作步骤" className="w-full rounded-lg shadow-md" />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">实际案例</h3>
        <div className="space-y-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
              <h4 className="text-xl font-semibold text-gray-800 mb-6">{caseItem.title}</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="text-lg font-semibold mb-3">设计图纸</h5>
                  <img src={caseItem.design} alt="设计图纸" className="w-full rounded-lg shadow-md mb-4" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-3">制作步骤</h5>
                  <img src={caseItem.steps} alt="制作步骤" className="w-full rounded-lg shadow-md mb-4" />
                  {caseItem.video && (
                    <div className="mt-4">
                      <video 
                        controls 
                        className="w-full h-32 object-cover rounded-lg"
                        poster={caseItem.steps}
                      >
                        <source src={caseItem.video} type="video/mp4" />
                        您的浏览器不支持视频播放
                      </video>
                    </div>
                  )}
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-3">完成效果</h5>
                  <img src={caseItem.finished} alt="完成效果" className="w-full rounded-lg shadow-md mb-4" />
                </div>
              </div>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">详细制作步骤：</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm grid md:grid-cols-2 gap-x-4">
                  {caseItem.detailSteps.map((step, stepIndex) => (
                    <li key={stepIndex} className="mb-1">{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'tools':
        return <ToolsSection />;
      case 'woodwork':
        return (
          <TechSection
            title="木工技术"
            description="学习基础木工技能，包括工具使用、材料处理、连接工艺等核心技术"
            toolsImage={woodworkTools}
            stepsImage={woodworkSteps}
            videoSrc={woodworkVideo}
            cases={[
              {
                title: "改进版手机支架制作",
                design: phoneStandImprovedDesign,
                steps: phoneStandImprovedSteps,
                finished: phoneStandImprovedFinished,
                video: phoneStandImprovedDemo,
                detailSteps: [
                  "材料准备和切割：选择10mm厚橡木板，按图纸尺寸精确切割",
                  "划线和标记：使用直尺和铅笔标记榫眼和角度调节机构位置",
                  "开榫眼和制作榫头：使用凿子开榫眼，制作配合紧密的榫头",
                  "制作角度调节机构：精确加工调节槽和定位销",
                  "试装配检查：组装各部件，检查配合度和调节功能",
                  "砂纸打磨：用120-400目砂纸逐级打磨至光滑",
                  "组装和固定：最终组装，确保结构稳定可靠",
                  "表面处理和最终检查：涂刷木蜡油，检查功能和外观"
                ]
              },
              {
                title: "实用鞋架制作",
                design: shoeRackDesign,
                steps: shoeRackSteps,
                finished: shoeRackFinished,
                detailSteps: [
                  "材料准备：选择松木板材，准备侧板、隔板、背板",
                  "下料切割：按设计尺寸精确切割各部件",
                  "开槽加工：在侧板上开槽，用于安装隔板",
                  "榫卯制作：制作传统榫卯连接，确保结构牢固",
                  "试装配：组装检查各部件配合情况",
                  "表面处理：砂纸打磨，去除毛刺和瑕疵",
                  "组装固定：使用榫卯和木胶进行最终组装",
                  "涂装保护：涂刷清漆或木蜡油保护表面"
                ]
              },
              {
                title: "多层书架制作",
                design: bookshelfDesign,
                steps: bookshelfSteps,
                finished: bookshelfFinished,
                detailSteps: [
                  "设计规划：根据使用需求确定书架尺寸和层数",
                  "材料选择：选用优质实木板材，确保承重能力",
                  "精确下料：使用台锯精确切割各部件",
                  "开槽钻孔：制作层板安装槽和背板固定孔",
                  "边缘处理：倒角打磨，确保安全美观",
                  "预装配：检查各部件配合度和整体稳定性",
                  "表面预处理：砂纸打磨至220目",
                  "组装侧板和隔板：使用木胶和螺丝固定",
                  "安装背板：增强整体结构稳定性",
                  "表面涂装：涂刷木器漆或清漆保护",
                  "最终装配和调试：安装完成后进行功能测试"
                ]
              },
              {
                title: "报纸架制作",
                design: newspaperRackDesign,
                steps: newspaperRackSteps,
                finished: newspaperRackFinished,
                detailSteps: [
                  "设计构思：设计简洁实用的报纸收纳结构",
                  "材料准备：选择轻质木材，便于移动使用",
                  "切割成型：按设计图纸切割各个部件",
                  "开槽处理：制作报纸插槽，确保合适深度",
                  "组装框架：连接主体框架结构",
                  "安装隔板：制作多个报纸存放隔间",
                  "表面打磨：整体打磨至光滑状态",
                  "涂装处理：涂刷适合的木器涂料"
                ]
              },
              {
                title: "收纳盒制作",
                design: storageBoxDesign,
                steps: storageBoxSteps,
                finished: storageBoxFinished,
                detailSteps: [
                  "材料准备和下料：选择合适厚度木板，精确切割",
                  "开槽和钻孔：制作盒体连接槽和铰链安装孔",
                  "边缘处理：倒角打磨，确保手感舒适",
                  "试装配：检查盒体各部件配合情况",
                  "砂纸打磨：逐级打磨至光滑状态",
                  "组装盒体：使用榫卯和木胶组装主体",
                  "安装铰链：精确安装盒盖铰链",
                  "制作和安装手柄：制作舒适的提手",
                  "表面涂装和最终检查：涂装保护，检查功能"
                ]
              }
            ]}
          />
        );
      case 'metalwork':
        return (
          <TechSection
            title="金工技术"
            description="掌握金属加工的基本技能，包括切割、钻孔、打磨等工艺流程"
            toolsImage={metalworkTools}
            stepsImage={metalworkSteps}
            videoSrc={metalworkVideo}
            cases={[
              {
                title: "改进版金属笔筒制作",
                design: metalPenHolderImprovedDesign,
                steps: metalPenHolderImprovedSteps,
                finished: metalPenHolderImprovedFinished,
                detailSteps: [
                  "金属板材准备和下料：选择1.5mm厚不锈钢板，按图纸尺寸切割",
                  "划线和标记：使用划线工具标记切割线和钻孔位置",
                  "切割和钻孔：使用金属切割机和台钻进行精确加工",
                  "卷制成圆筒形：使用卷板机将板材卷制成圆筒",
                  "焊接接缝：使用氩弧焊焊接纵向接缝",
                  "制作底部和分隔：制作底板和内部分隔结构",
                  "组装和固定：将各部件组装并固定",
                  "表面抛光：使用抛光机达到镜面效果",
                  "最终检查和测试：检查功能和外观质量"
                ]
              },
              {
                title: "金属书立制作",
                design: metalBookendDesign,
                steps: metalBookendSteps,
                finished: metalBookendFinished,
                detailSteps: [
                  "金属板材准备和切割：选择3mm厚304不锈钢板，精确切割",
                  "划线和标记弯折线：使用直尺和划线器标记90度弯折位置",
                  "使用弯板机进行90度弯折：确保弯折角度准确",
                  "边缘处理和打磨：使用角磨机处理切割边缘",
                  "表面抛光：逐级抛光至镜面效果",
                  "清洁和检查：清除加工残留物，检查表面质量",
                  "防锈处理：进行表面防护处理",
                  "最终质量检查：检查尺寸精度和外观质量"
                ]
              },
              {
                title: "多功能工具架制作",
                design: metalToolRackDesign,
                steps: metalToolRackSteps,
                finished: metalToolRackFinished,
                detailSteps: [
                  "金属板材准备和下料：选择2mm厚钢板，按图纸下料",
                  "划线和标记：标记切割线、钻孔位置和焊接点",
                  "切割和钻孔：使用等离子切割机和台钻加工",
                  "边缘处理：打磨切割边缘，去除毛刺",
                  "弯折成型：按设计要求弯折各个部件",
                  "试装配：检查各部件配合情况",
                  "焊接组装：使用电弧焊进行结构焊接",
                  "打磨焊缝：使用角磨机打磨焊接部位",
                  "表面处理：喷涂防锈漆或进行电镀处理",
                  "最终检查和测试：检查结构强度和功能"
                ]
              }
            ]}
          />
        );
      case 'electronics':
        return (
          <TechSection
            title="电子技术"
            description="学习电子制作的基础技能，包括电路设计、元件焊接、调试测试等"
            toolsImage={electronicsTools}
            stepsImage={electronicsSteps}
            videoSrc={electronicsVideo}
            cases={[
              {
                title: "LED闪烁灯制作",
                design: electronicsCaseDesign,
                steps: electronicsSteps,
                finished: electronicsCaseFinished,
                detailSteps: [
                  "分析电路原理图，理解工作原理",
                  "准备所需电子元件：电阻、电容、三极管、LED等",
                  "清洁PCB板表面，去除氧化层",
                  "按照PCB布局图放置元件",
                  "预热烙铁至350-400°C",
                  "涂抹适量助焊剂",
                  "逐个焊接元件，控制焊接时间2-3秒",
                  "检查焊点质量，确保无虚焊",
                  "通电测试，调试电路参数"
                ]
              }
            ]}
          />
        );
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <main className="container mx-auto px-6 py-8">
        {renderContent()}
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg mb-2">通用技术实践操作赛前培训</p>
          <p className="text-gray-400">王华军老师 © 2025 江苏省通用技术基本功竞赛培训</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

