'use strict';

let synaptic = require('synaptic');
let Neuron = synaptic.Neuron,
        Layer = synaptic.Layer,
        Network = synaptic.Network,
        Trainer = synaptic.Trainer,
        Architect = synaptic.Architect;

const tagNames = ['apple_pie', 'baby_back_ribs', 'bibimbap', 'breakfast_burrito', 'caesar_salad', 
                  'cheese_plate', 'cheese_cake', 'chicken_curry', 'chicken_quesadilla', 
                  'chicken_wings', 'chocolate_cake', 'clam_chowder', 'club_sandwich', 'donuts',
                  'dumplings', 'eggs_benedict', 'fish_and_chips', 'french_fries', 'fried_rice', 
                  'guacamole', 'hamburger', 'hot_dog', 'ice_cream', 'macaroni_and_cheese', 
                  'nachos', 'omelette', 'onion_rings', 'pad_thai', 'pancakes', 'pho', 'pizza', 
                  'pork_chop', 'ramen', 'ravioli', 'samosa', 'sashimi', 'spaghetti', 'sushi', 
                  'tacos', 'waffles'];

export {};

class RecommendationAI {
  private neuralNetwork;
  private trainer; 
  private data;
  public constructor() {
    this.neuralNetwork = new Architect.Perceptron(40, 20, 1);
    this.trainer = new Trainer(this.neuralNetwork);
  }

  /**
   *  Getter method that returns neural network
   */
  public getNeuralNetwork() {
    return this.neuralNetwork;
  }

  /**
   *  Getter method that returns trainer
   */
  public getTrainer() {
    return this.trainer;
  }

  /**
   * 
   */
  public getData() {
    return this.data;
  }

  /**
   * 
   */
  public setData(newData) {
    this.data = newData;
  }

  /**
   * Create a neural network with 40 inputs, 1 hidden layer with 20 neurons, and a single output neuron
   * 
   * @param PLACEHOLDER input from user
   * @return Dictionary of tags and their probabilities
   */
   public trainModel(userInputData) {
    
    this.data.push.apply(this.data, userInputData);

    let trainingSet = [
      {
        input: [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        output: [1]
      },
      {
        input: [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        output: [0]
      },
      {
        input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],    
        output: [1]
      },
      {
        input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        output: [1]
      },
      {
        input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],    
        output: [1]
      },
      {
        input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        output: [0]
      },
      {
        input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        output: [0]
      },
      {
        input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],    
        output: [1]
      },
      {
        input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],    
        output: [1]
      }
    ]
    // trains our model with training set
    this.trainer.train(trainingSet, {
      error: 0.05,
      log: 5,
      //cost: Trainer.cost.CROSS_ENTROPY
    });

    trainingSet = [{
      input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
      output: [1]
    }]

    this.trainer.train(trainingSet, {
      error: 0.05,
      log: 5,
      //cost: Trainer.cost.CROSS_ENTROPY
    });

    let result = {};
    for (let i = 0; i < 40; i++) {
      let array = new Array(40).fill(0);
      array[i] = 1;
      
      // Predict on restaurant photos
      //let food = tagNames[i];
      result[tagNames[i]] = this.neuralNetwork.activate(array)[0]; 
    }
    console.log(result);
    return result;
  }

}

module.exports = RecommendationAI;