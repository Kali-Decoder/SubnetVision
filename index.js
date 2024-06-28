#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Polyfill __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File path for storing tasks and configuration
const tasksFilePath = path.join(__dirname, 'tasks.json');
const configFilePath = path.join(__dirname, 'config.json');

// Function to load tasks from the file
const loadTasks = async () => {
  try {
    const dataBuffer = await fs.readFile(tasksFilePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Function to save tasks to the file
const saveTasks = async (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  await fs.writeFile(tasksFilePath, dataJSON);
};

// Function to load config from the file
const loadConfig = async () => {
  try {
    const dataBuffer = await fs.readFile(configFilePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return {};
  }
};

// Function to save config to the file
const saveConfig = async (config) => {
  const dataJSON = JSON.stringify(config);
  await fs.writeFile(configFilePath, dataJSON);
};

// Simulated deployment function (replace with actual logic)
const deployContracts = async (subnetName) => {
  console.log('Deploying your contracts on subnets...');
  console.log('Deploying Blockchain. Wait until network acknowledges..');
  // Simulate deployment with delays
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(`Teleporter Messenger successfully deployed to -chain (0x253b2784c75510dD0fF1da844684a1aC0aa5fcf)`);
  console.log(`Teleporter Registry successfully deployed to -chain (0x17aB05351fC94a1a67Bf3f56DdbB941aE6c63E25)`);
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(`Teleporter Messenger successfully deployed to ${subnetName} (0x2532784c75510dD0F1da844684a1aC0aa5fcf)`);
  console.log(`Teleporter Registry successfully deployed to ${subnetName} (0xA27afa6C3247d91bB1(deDE8fa374Bda93487777)`);
};

// Create a new Command instance
const program = new Command();

// Command to create Avalanche subnet
program
  .command('avalanche create subnet <subnetName>')
  .description('Create an Avalanche subnet')
  .action(async (subnetName) => {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'vmOption',
        message: 'Choose your VM option:',
        choices: ['Subnet-EVM', 'Custom'],
      },
      {
        type: 'list',
        name: 'subnetEvmVersion',
        message: 'What version of Subnet-EVM would you like?',
        choices: ['Use latest version', 'Custom version'],
        when: (answers) => answers.vmOption === 'Subnet-EVM',
      },
      {
        type: 'input',
        name: 'customSubnetEvmVersion',
        message: 'Enter the custom version of Subnet-EVM:',
        when: (answers) => answers.subnetEvmVersion === 'Custom version',
      },
      {
        type: 'input',
        name: 'subnetChainId',
        message: 'Enter your Subnet ChainId:',
        when: (answers) => answers.vmOption === 'Subnet-EVM',
      },
      {
        type: 'input',
        name: 'tokenSymbol',
        message: 'Select a token symbol for your subnet\'s native token:',
        when: (answers) => answers.vmOption === 'Subnet-EVM',
      },
      {
        type: 'list',
        name: 'feesOption',
        message: 'How would you like to set fees?',
        choices: ['Low disk use', 'High disk use', 'Medium disk use'],
      },
      {
        type: 'list',
        name: 'fundDistribution',
        message: 'How would you like to distribute funds?',
        choices: [
          'Airdrop 1 million tokens to newly generated address',
          'Airdrop 1 million tokens to Default Address',
          'Customize your airdrop',
        ],
      },
      {
        type: 'list',
        name: 'customPrecompile',
        message: 'Would you like to add a custom precompile to modify the EVM?',
        choices: ['yes', 'no'],
      },
      {
        type: 'list',
        name: 'runAmwRelayer',
        message: 'Would you like to run AMW Relayer while deploying your VM?',
        choices: ['yes', 'no'],
      },
      {
        type: 'list',
        name: 'deploySubnet',
        message: `Deploy ${subnetName}?`,
        choices: ['yes', 'no'],
      },
      {
        type: 'list',
        name: 'network',
        message: 'Choose a network for the operation:',
        choices: ['Local Network', 'Fuji', 'Mainnet', 'Devnet'],
        when: (answers) => answers.deploySubnet === 'yes',
      },
      {
        type: 'list',
        name: 'enableSubnetVision',
        message: 'Do you want to enable Subnet Vision for Devnet?',
        choices: ['yes', 'no'],
        when: (answers) => answers.network === 'Devnet',
      },
    ]);

    const config = {
      subnetName,
      vmOption: answers.vmOption,
    };

    if (answers.vmOption === 'Subnet-EVM') {
      config.subnetEvmVersion = answers.subnetEvmVersion;
      if (answers.subnetEvmVersion === 'Custom version') {
        config.customSubnetEvmVersion = answers.customSubnetEvmVersion;
      }
      config.subnetChainId = answers.subnetChainId;
      config.tokenSymbol = answers.tokenSymbol;
    }

    config.feesOption = answers.feesOption;
    config.fundDistribution = answers.fundDistribution;
    config.customPrecompile = answers.customPrecompile === 'yes';
    config.runAmwRelayer = answers.runAmwRelayer === 'yes';

    if (answers.deploySubnet === 'yes') {
      config.network = answers.network;
    }

    if (answers.enableSubnetVision === 'yes') {
      console.log('Enabling Subnet Vision...');
      // Simulate enabling Subnet Vision (replace with actual logic)
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating async operation
      console.log('Subnet Vision enabled successfully!');
    }

    await deployContracts(subnetName);
    await saveConfig(config);
    console.log('Configuration saved!');

    if (answers.network === 'Devnet' && answers.enableSubnetVision === 'yes') {
      console.log('Console: Here you can look on Subnet Vision');
      console.log(`http://localhost:3000/${subnetName}/teleporter/0x253b2784c75510dD0fF1da844684a1aC0aa5fcf`);
    }
  });

// Command to list tasks
program
  .command('list')
  .description('List all tasks')
  .action(async () => {
    const tasks = await loadTasks();
    console.log('Your tasks:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  });

// Command to add a task
program
  .command('add')
  .description('Add a new task')
  .action(async () => {
    const config = await loadConfig();
    if (!config.subnetName) {
      console.log('Please run "avalanche create subnet <subnetName>" first to configure your Avalanche subnet.');
      return;
    }

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'task',
        message: 'Enter task description:',
      },
    ]);
    const tasks = await loadTasks();
    tasks.push(answers.task);
    await saveTasks(tasks);
    console.log('Task added!');
  });

// Command to remove a task
program
  .command('remove')
  .description('Remove a task')
  .action(async () => {
    const tasks = await loadTasks();
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'taskToRemove',
        message: 'Select a task to remove:',
        choices: tasks.map((task, index) => ({
          name: task,
          value: index,
        })),
      },
    ]);
    tasks.splice(answers.taskToRemove, 1);
    await saveTasks(tasks);
    console.log('Task removed!');
  });

program.parse(process.argv);
