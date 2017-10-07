'use strict';

let synaptic = require('synaptic');
let Neuron = synaptic.Neuron,
        Layer = synaptic.Layer,
        Network = synaptic.Network,
        Trainer = synaptic.Trainer,
        Architect = synaptic.Architect;


/*
function Perceptron(input, hidden, output)
    {
    // create the layers
    var inputLayer = new Layer(input);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(output);

    // connect the layers
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    // set the layers
    this.set({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
}

// extend the prototype chain
Perceptron.prototype = new Network();
Perceptron.prototype.constructor = Perceptron;
*/

// Create a neural network with 101 inputs, 2 hidden layers with 51 neurons, and a single output neuron
let myNetwork = new Architect.Perceptron(3, 20, 20, 1);
let trainer = new Trainer(myNetwork);

let trainingSet = [
  {
    input: [0,0,1],
    output: [0]
  },
  {
    input: [0,1,0],
    output: [1]
  },
  {
    input: [1,1,0],
    output: [0]
  },
  {
    input: [1,1,1],
    output: [0]
  },
  {
    input: [0,1,1],
    output: [1]
  },
  {
    input: [0,0,0],
    output: [1]
  },
  {
    input: [1,0,1],
    output: [0]
  },
  {
    input: [1,0,0],
    output: [0]
  },
]

// trains our model with training set
trainer.train(trainingSet);

//let result = myNetwork.activate([0,0,1]);
//console.log(result);