import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface CompetencyLevel {
  competency: string;
  competencyLevel: string;
  competencyScore: number;
  gapForMasteringNextLevel: number;
}

interface InvestorType {
  investorRiskPsyche: string;
  risk: string;
  growth: string;
  volatility: string;
  return: string;
}

interface CompetencyDefinition {
  competency: string;
  relationshipBuilding: string;
  resultOrientation: string;
  influence: string;
  partnering: string;
  riskTaking: string;
  planningOrganizing: string;
  businessFocus: string;
}

const competencyLevels: CompetencyLevel[] = [
   {
     competency: 'Relationship Building',
     competencyLevel: 'Level4',
     competencyScore: 80.00,
     gapForMasteringNextLevel: 20.00,
   },
   {
     competency: 'Results Orientation',
     competencyLevel: 'Level3',
     competencyScore: 60.00,
     gapForMasteringNextLevel: 40.00,
   },
   {
     competency: 'Influence',
     competencyLevel: 'Level2',
     competencyScore: 33.33,
     gapForMasteringNextLevel: 55.56,
   },
   {
     competency: 'Partnering',
     competencyLevel: 'Level2',
     competencyScore: 33.33,
     gapForMasteringNextLevel: 55.56,
   },
   {
     competency: 'Risk Management',
     competencyLevel: 'Level4',
     competencyScore: 90.00,
     gapForMasteringNextLevel: 10.00,
   },
   {
     competency: 'Planning Organizing',
     competencyLevel: 'Level3',
     competencyScore: 58.33,
     gapForMasteringNextLevel: 41.67,
   },
   {
     competency: 'Business Focus',
     competencyLevel: 'Level3',
     competencyScore: 58.33,
     gapForMasteringNextLevel: 41.67,
   },
 ];

 const investorTypes: InvestorType[] = [
   {
     investorRiskPsyche: 'Conservative',
     risk: 'Low',
     growth: 'Low',
     volatility: 'Low',
     return: 'Low',
   },
   {
     investorRiskPsyche: 'Moderately conversative',
     risk: 'Low',
     growth: 'Low',
     volatility: 'Moderate',
     return: 'Low',
   },
   {
     investorRiskPsyche: 'Balanced',
     risk: 'Moderate',
     growth: 'Steady & sustained',
     volatility: 'Moderate',
     return: 'Moderate',
   },
   {
     investorRiskPsyche: 'Aggressive',
     risk: 'High',
     growth: 'High',
     volatility: 'High',
     return: 'High',
   },
   {
     investorRiskPsyche: 'Very Aggressive',
     risk: 'High',
     growth: 'High',
     volatility: 'High',
     return: 'High',
   },
 ];

 const competencyDefinitions: CompetencyDefinition[] = [
   {
     competency: 'Competency',
     relationshipBuilding: 'Building and actively maintaining working relationships and/or networks of contacts to further the organizations goals',
     resultOrientation: 'Focusing personal efforts on achieving results consistent with the organizations objectives',
     influence: 'Gaining support from and convincing others to advance the objectives of the organization',
     partnering: 'Seeking and building strategic alliances and collaborative arrangements through partnerships to advance the objectives of the organization',
     riskTaking: 'Identifying, assessing and managing risk while striving to attain objectives',
     planningOrganizing: 'Defining tasks and milestones to achieve objectives, while ensuring the optimal use of resources to meet those objectives',
     businessFocus: 'The motivation and ability to apply good financial & commercial practice at all times.',
   },
   {
     competency: 'Level 1',
     relationshipBuilding: 'Accesses sources of information',
     resultOrientation: 'Strives to meet work expectations',
     influence: 'Uses facts and available information to persuade',
     partnering: 'Operates effectively within partnerships',
     riskTaking: 'Identifies possible risks',
     planningOrganizing: 'Plans tasks and organizes own work',
     businessFocus: 'Applies good commercial practice',
   },
   {
     competency: 'Level 2',
     relationshipBuilding: 'Builds key contacts',
     resultOrientation: 'Consistently meets established expectations',
     influence: 'Adapts rationale to influence others',
     partnering: 'Manages existing partnerships',
     riskTaking: 'Takes calculated risks',
     planningOrganizing: 'Applies planning principles to achieve work goals',
     businessFocus: 'Identifies opportunities for profit making or cost saving',
   },
   {
     competency: 'Level 3',
     relationshipBuilding: 'Seeks new relationship opportunities for self and others.',
     resultOrientation: 'Surpasses established expectations',
     influence: 'Demonstrates the benefit of ideas',
     partnering: 'Seeks out partnership opportunities',
     riskTaking: 'Personally takes significant risks',
     planningOrganizing: 'Develops plans for the business unit',
     businessFocus: 'Identifies and exploits new business opportunities',
   },
   {
     competency: 'Level 4',
     relationshipBuilding: 'Strategically expands networks and creates networking opportunities',
     resultOrientation: 'Seeks out significant challenges and pursues excellence on an organizational level',
     influence: 'Builds coalitions, strategic relationships, networks and designs complex influence strategies',
     partnering: 'Facilitates partnerships & Sets strategic direction for partnering',
     riskTaking: 'Designs strategies for dealing with high-risk initiatives and Provides organizational guidance on risk',
     planningOrganizing: 'Integrates and evaluates plans to achieve business goals & Plans and organizes at a strategic level',
     businessFocus: 'Plans strategically for thebusiness using commercial expertise',
   },
 ];

const ForexInvestorBehaviourProfileReport: React.FC = () => {
  return (
   <>
      <div>
         <div className="h-full overflow-hidden absolute flex-none w-full">
            <img className="block w-full h-screen -z-10" src="/assets/background.webp" alt="" />
         </div>
         <div className="h-full overflow-hidden absolute flex-none w-full">
            <img className="block w-full h-full -z-10" src="/assets/box-pattern.svg" alt="" />
         </div>
      </div>
      <Navbar />
      <div className=''>
         <div className='w-full phone:pt-20 lg:pt-40 absolute'>
            <div className="phone:text-3xl tablet:text-5xl lg:text-6xl font-semibold tracking-tighter lg:px-2 py-1 gradient-text text-left w-[90%] mx-auto">
               <span className="bg-gradient-to-r from-indigo-400/95 to-yellow-300/60 bg-clip-text text-transparent tablet:text-nowrap">
                  Forex Investor Behaviour Profile Report
               </span>
            </div>
            <div className='bg-opacity-10 shadow-none border-none w-[89%] mx-auto mt-2'>
               <div>
                  <h1 className='font-medium text-neutral-700'>Name: Ganesh</h1>
                  <h1 className='font-medium text-base text-neutral-500'>Competency Level Description</h1>
               </div>
               <div className='font-medium text-neutral-500 tablet:text-nowrap tracking-tight w-full'>
                  <h1>Level 1: Has basic knowledge/awareness of the skill</h1>
                  <h1>Level 2: Has/possesses working knowledge of the skill</h1>
                  <h1>Level 3: Has/possesses comprehensive skill to do the job well</h1>
                  <h1>Level 4: Has mastered/can coach the skill and can guide others</h1>
               </div>
            </div>
         </div>
         <div className="flex flex-col w-[90%] mx-auto phone:pb-16 lg:pb-40 phone:pt-[28rem] tablet:pt-[26rem]">
            <div className="">
               <Table className="w-full">
                  <TableHeader>
                     <TableRow className='border-none'>
                        <TableHead className="w-[150px] rounded-l-lg bg-[#F1ECEC] pl-4">S.No</TableHead>
                        <TableHead className="bg-[#F1ECEC]">Competency</TableHead>
                        <TableHead className="bg-[#F1ECEC]">Competency Level</TableHead>
                        <TableHead className="bg-[#F1ECEC]">Competency Score</TableHead>
                        <TableHead className="text-right rounded-r-lg bg-[#F1ECEC] pr-4">Gap for Mastering Table next level</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {competencyLevels.map((level, index) => (
                     <TableRow key={index} className="">
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{level.competency}</TableCell>
                        <TableCell>{level.competencyLevel}</TableCell>
                        <TableCell>{level.competencyScore.toFixed(2)}%</TableCell>
                        <TableCell className="text-right">{level.gapForMasteringNextLevel.toFixed(2)}%</TableCell>
                     </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </div>

            <div className="mt-10">
               <h2 className="phone:text-xl tablet:text-2xl lg:text-3xl font-semibold mb-4 tracking-tighter text-neutral-700">Investor Types</h2>
               <Table className="w-full">
                  <TableHeader className='text-sm'>
                     <TableRow className="border-none">
                        <TableHead className="w-[150px] rounded-l-lg bg-[#F1ECEC] pl-4">S.No</TableHead>
                        <TableHead className="bg-[#F1ECEC]">Investor Risk Psyche</TableHead>
                        <TableHead className="bg-[#F1ECEC]">Risk</TableHead>
                        <TableHead className="bg-[#F1ECEC]">Growth</TableHead>
                        <TableHead className="bg-[#F1ECEC]">Volatility</TableHead>
                        <TableHead className="text-right rounded-r-lg bg-[#F1ECEC] pr-4">Return</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {investorTypes.map((type, index) => (
                     <TableRow key={index} className="text-sm">
                        <TableCell className="pl-4 p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">{index + 1}</TableCell>
                        <TableCell className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">{type.investorRiskPsyche}</TableCell>
                        <TableCell className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">{type.risk}</TableCell>
                        <TableCell className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">{type.growth}</TableCell>
                        <TableCell className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">{type.volatility}</TableCell>
                        <TableCell className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right pr-4">{type.return}</TableCell>
                     </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </div>

            <div className="mt-10">
               <h2 className="phone:text-xl tablet:text-2xl lg:text-3xl font-semibold mb-4 tracking-tighter text-neutral-700">Competency Definitions</h2>
               <Table className='rounded-lg'>
                  <TableHeader className=''>
                     <TableRow className='border-none'>
                        <TableHead className='w-[150px] rounded-l-lg bg-[#F1ECEC] pl-4 '>Competency</TableHead>
                        <TableHead className='bg-[#F1ECEC]'>Relationship Building</TableHead>
                        <TableHead className='bg-[#F1ECEC]'>Result Orientation</TableHead>
                        <TableHead className='bg-[#F1ECEC]'>Influence</TableHead>
                        <TableHead className='bg-[#F1ECEC]'>Partnering</TableHead>
                        <TableHead className='bg-[#F1ECEC]'>Risk Taking</TableHead>
                        <TableHead className='bg-[#F1ECEC]'>Planning & Organizing</TableHead>
                        <TableHead className='text-right rounded-r-lg bg-[#F1ECEC] pr-4'>Business Focus</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody className=''>
                     {competencyDefinitions.map((definition, index) => (
                     <TableRow key={index} className="mb-auto">
                        <TableCell className='pl-4'>{definition.competency}</TableCell>
                        <TableCell className='mb-auto'>{definition.relationshipBuilding}</TableCell>
                        <TableCell>{definition.resultOrientation}</TableCell>
                        <TableCell>{definition.influence}</TableCell>
                        <TableCell>{definition.partnering}</TableCell>
                        <TableCell>{definition.riskTaking}</TableCell>
                        <TableCell>{definition.planningOrganizing}</TableCell>
                        <TableCell className="text-right pr-4">{definition.businessFocus}</TableCell>
                     </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </div>
         </div>
      </div>
      <Footer />
   </>

  );
};

export default ForexInvestorBehaviourProfileReport;
