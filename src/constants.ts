import { LucideIcon, Swords, Zap, Shield, HeartPulse, User, Settings, Database, Crosshair, Sparkles, Terminal, Code, Cpu, Flame, Trophy } from 'lucide-react';

export interface Script {
  id: string;
  title: string;
  game: string;
  type: string;
  description: string;
  code: string;
  loadCommand: string;
  isPatched: boolean;
  isNoKey: boolean;
  addedAt: string;
  category: 'Popular' | 'New' | 'Updated';
}

export const SCRIPTS: Script[] = [
  {
    id: 'rob-hub-main',
    title: 'RobHubz Main Script (100% Working)',
    game: 'Universal',
    type: 'Multi-Hub',
    description: 'The primary RobHubz loader. Updated for 2026 with ultra-fast injection and anti-ban measures.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/huy384/redzHub/refs/heads/main/redzHub.lua"))()',
    loadCommand: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/huy384/redzHub/refs/heads/main/redzHub.lua"))()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-11',
    category: 'Popular'
  },
  {
    id: 'rob-hub-v2-teleport',
    title: 'RobHubz v2 Auto Teleport',
    game: 'Blox Fruits',
    type: 'Teleportation',
    description: 'Advanced teleportation script for Blox Fruits. Travel between islands and seas instantly.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/REDzHUB/BloxFruits/main/redz9999"))()',
    loadCommand: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/REDzHUB/BloxFruits/main/redz9999"))()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-11',
    category: 'Updated'
  },
  {
    id: 'rob-hub-v3-farm',
    title: 'RobHubz v3 Auto Farming',
    game: 'Blox Fruits',
    type: 'Auto Farm',
    description: 'The latest v3 auto-farming engine. Optimized for 2026 with new chest and fruit detection.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/newredz/BloxFruits/refs/heads/main/Source.luau"))()',
    loadCommand: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/newredz/BloxFruits/refs/heads/main/Source.luau"))()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-11',
    category: 'New'
  },
  {
    id: 'dragon-update-2026',
    title: 'Dragon Update Special',
    game: 'Blox Fruits',
    type: 'Event Script',
    description: 'Specialized script for the Dragon Update. Unlock all new moves and farm event items.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/realredz/DragonUpdate/refs/heads/main/Source.lua"))()',
    loadCommand: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/realredz/DragonUpdate/refs/heads/main/Source.lua"))()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-11',
    category: 'New'
  },
  {
    id: 'blox-fruits-auto-farm-beta',
    title: 'Blox Fruits Beta Auto Farm',
    game: 'Blox Fruits',
    type: 'Auto Farm / Beta',
    description: 'Advanced beta version with multi-translator support and team selection.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/tlredz/Scripts/refs/heads/main/main.luau"))(Settings)',
    loadCommand: 'local Settings = { JoinTeam = "Pirates"; Translator = true; }; getgenv().BETA_VERSION = true; loadstring(game:HttpGet("https://raw.githubusercontent.com/tlredz/Scripts/refs/heads/main/main.luau"))(Settings)',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-11',
    category: 'Popular'
  },
  {
    id: 'brookhaven-ice-hub',
    title: 'Brookhaven IceHub GUI',
    game: 'Brookhaven RP',
    type: 'Admin / Troll',
    description: 'Customize players, view avatars, and use admin commands in Brookhaven.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Waza80/scripts-new/main/IceHubBrookhaven.lua"))()',
    loadCommand: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Waza80/scripts-new/main/IceHubBrookhaven.lua"))()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-11',
    category: 'Popular'
  },
  {
    id: 'fisch-zenith-hub',
    title: 'Fisch Zenith Hub',
    game: 'Fisch',
    type: 'Auto Fish / Macro',
    description: 'Perfect macro for Fisch. Auto catch, instant reel, and fast catch features.',
    code: 'loadstring(game:HttpGet("https://zenithhub.cloud/panel/script"))()',
    loadCommand: 'loadstring(game:HttpGet("https://zenithhub.cloud/panel/script"))()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-11',
    category: 'Updated'
  },
  {
    id: 'blade-ball-parry',
    title: 'Blade Ball RobHubz Edition',
    game: 'Blade Ball',
    type: 'Auto Parry / Spam',
    description: 'Unbeatable auto-parry for Blade Ball. Customizable spam and target locking.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/REDzHUB/BladeBall/main/redz9999"))()',
    loadCommand: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/REDzHUB/BladeBall/main/redz9999"))()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-11',
    category: 'Popular'
  },
  {
    id: 'meme-sea-robhubz',
    title: 'Meme Sea Ultimate Hub',
    game: 'Meme Sea',
    type: 'Leveling / Boss',
    description: 'Specialized for Meme Sea. Automated boss fights and level farming.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/realredz/MemeSea/refs/heads/main/Source.lua"))()',
    loadCommand: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/realredz/MemeSea/refs/heads/main/Source.lua"))()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-11',
    category: 'New'
  },
  {
    id: 'pet-sim-99-robhubz',
    title: 'PS99 RobHubz Script',
    game: 'Pet Simulator 99',
    type: 'Auto Farm / Hatch',
    description: '100% working script for Pet Sim 99. Auto hatch and currency farming.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/REDzHUB/PetSimulator99/main/redz9999.lua"))()()',
    loadCommand: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/REDzHUB/PetSimulator99/main/redz9999.lua"))()()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-11',
    category: 'Popular'
  },
  {
    id: 'mm2-silent-aim',
    title: 'MM2 Godly Hub',
    game: 'Murder Mystery 2',
    type: 'Silent Aim / ESP',
    description: 'See the killer and sheriff through walls. Instant coin collection and auto-win features.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/RedzHub/Scripts/main/MM2.lua"))()',
    loadCommand: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/RedzHub/Scripts/main/MM2.lua"))()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-08',
    category: 'Popular'
  },
  {
    id: 'doors-entity-esp',
    title: 'Doors Floor 2 GUI',
    game: 'Doors',
    type: 'ESP / Speed',
    description: 'Never get jumpscared again. Predict entities, walk through walls, and reach room 50 instantly.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/RedzHub/Scripts/main/Doors.lua"))()',
    loadCommand: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/RedzHub/Scripts/main/Doors.lua"))()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-11',
    category: 'New'
  },
  {
    id: 'jailbreak-nitro-robhubz',
    title: 'Jailbreak Nitro Hub v2',
    game: 'Jailbreak',
    type: 'Auto Rob / Fly',
    description: 'The fastest auto-rob loop for Jailbreak. Fly your car and rob every store in minutes.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/REDzHUB/Jailbreak/main/redz9999"))()',
    loadCommand: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/REDzHUB/Jailbreak/main/redz9999"))()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-10',
    category: 'Updated'
  },
  {
    id: 'arsenal-silent-robhubz',
    title: 'Arsenal RobHubz Killshot',
    game: 'Arsenal',
    type: 'Combat / Aim',
    description: 'Headshot guarantee with silent aim. Wallhacks and FOV circles included.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/realredz/Arsenal/refs/heads/main/Source.lua"))()',
    loadCommand: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/realredz/Arsenal/refs/heads/main/Source.lua"))()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-11',
    category: 'New'
  },
  {
    id: 'adopt-me-robhubz',
    title: 'Adopt Me Better Hub v4',
    game: 'Adopt Me!',
    type: 'Auto Care / Money',
    description: 'Automate all pet tasks. Grow your pets while AFK and earn thousands of bucks.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/realredz/AdoptMe/refs/heads/main/Source.lua"))()',
    loadCommand: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/realredz/AdoptMe/refs/heads/main/Source.lua"))()',
    isPatched: false,
    isNoKey: true,
    addedAt: '2026-05-11',
    category: 'New'
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Scripts', icon: Database },
  { id: 'blox-fruits', label: 'Blox Fruits', icon: Flame },
  { id: 'pet-sim', label: 'Pet Simulator', icon: Trophy },
  { id: 'admin', label: 'Admin GUIs', icon: Terminal }
];
