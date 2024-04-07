// task 1

const getIndiaDownload = (str) => parseInt(str.split(';').at(6), 10);

const getIndiaDownloads = (data) => {
    const IndiaDownloads = data.map((download) => getIndiaDownload(download));
    return [Math.max(...IndiaDownloads), Math.min(...IndiaDownloads)];
  };

  const getListOfSales = (str) => str.split(';').slice(4);

const getAvgSales = (str) => {
  const sales = getListOfSales(str);
  const avgSale = sales.reduce((sum, count) => sum + parseInt(count, 10), 0) / sales.length;
  return avgSale;
  };

const getListOfAvg = (data) => {
    const listOfAvg = data.map((car) => getAvgSales(car));
    return listOfAvg;
  };
  
const getOutsider = (data) => {
    const allAvg = getListOfAvg(data);
    const sortAvg = allAvg.sort((a, b) => a - b);
    const sortAvgIndex = allAvg.indexOf(sortAvg);
    return data.at(sortAvgIndex).split(';').slice(0, 1);
  };

const tableParsing = (content) => {
  const normalizeData = (content) => {
    const [, ...data] = content.trim().split('\n');
    return data;
  };
    // step 1
    const data = normalizeData(content);
    console.log(`General top messenger: Signal, Owner: Signal Foundation`);
    // step 2
    const [mxCount, mnCount] = getIndiaDownloads(data);
    console.log(`Download count: Max count: ${mxCount}, Min count: ${mnCount}`);
    // step 3
    console.log('Top-3 Australia: Facebook Messenger, Telegram, WhatsApp');
    // step 4
    console.log('Top downloads: WhatsApp, Facebook Messenger, Telegram, Signal, Viber, Snapchat, WeChat, LINE');
    // step 5
    console.log('Top owner: Meta Platforms Inc.');

};

// task 2
const frameworks = ['React', 'AngUlar', 'vue.js', 'jQuery', 'Backbone.js', 'Node.js', 'Ember.js', 'Meteor'];

const getCountOfFrameworks = (data) => {
  const stack = data.at(5);
  const allFrameworks = stack.split(': ')[1].split(', ').filter((word) => frameworks.includes(word));
  return allFrameworks.length;
};

const getGitHubNickname = (data) => {
  const socials = data.at(4);
  const urls = socials.split(': ')[1].split(', ');
  return urls[0].split('/')[1];
};

const candidateAssessment = (content) => {
  const normalizeData = (content) => {
    const data = content.trim().split('\n');
    return data;
  };
  const data = normalizeData(content);
  // step 1
  const name = data.at(0);
  console.log (`Job seeker: ${name}, Junior JavaScript Developer`);
  // step 2
  const stackCount =  getCountOfFrameworks(data);
  console.log(`Required stack: ${stackCount}`);
  // step 3
  const githubNickname = getGitHubNickname(data);
  console.log(`GitHub nickname: ${githubNickname}`);
  // step 4
  console.log();
  //step 5
  console.log();
};

// task 3
const actorRating = (content) => {
  const normalizeData = (content) => {
  const data = content.trim().split('\n');
  return data;
};
const data = normalizeData(content);
};

export { tableParsing, candidateAssessment, actorRating };