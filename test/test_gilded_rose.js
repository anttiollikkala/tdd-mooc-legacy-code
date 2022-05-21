var { expect } = require("chai");
var { Shop, Item } = require("../src/gilded_rose.js");

describe("Gilded Rose", function () {
  it("When item name is other and quality is 2, the quality reduces to 0", function () {
    const gildedRose = new Shop([new Item("other", 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it("When item name is other and quality is 0, the quality stays 0", function () {
    const gildedRose = new Shop([new Item("other", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it("When item name is Aged Brie and quality is less than 50, the quality is incresed by 2", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(4);
  });


  it("When item name is Backstage passes to a TAFKAL80ETC concert the quality is zeroed", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });


  it("When item name is Sulfuras, Hand of Ragnaros and sellIn is negative quality stays same", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(80);
  });



  it("When name is Backstage passes to a TAFKAL80ETC concert and selling less than 6 and quality 48, quality increases by 2", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it("When name Backstage passes to a TAFKAL80ETC concert, sellin 11 and quality 49, quality increases by one", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(49);
  });


  it("When name Backstage passes to a TAFKAL80ETC concert, sellin 10 and quality 49, quality increases by one", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });


  it("When name Backstage passes to a TAFKAL80ETC concert, sellin 6 and quality 47, quality increases by two", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 47)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(49);
  });


  it("When name Backstage passes to a TAFKAL80ETC concert, sellin 5 and quality 47, quality increases by 3", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 47)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });


  it("When name Conjured, sellin 1 and quality 50, quality decreases by one", function () {
    const gildedRose = new Shop([new Item("Conjured", 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(49);
  });

  it("When name Sulfuras, Hand of Ragnaros, sellin negative and quality 50, quality stays the same", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1,80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(80);
  });

  it("When name Aged Brie, sellin negative and quality 50, quality stays the same", function () {
    const gildedRose = new Shop([new Item("Aged Brie", -1,50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it("When provided with no arguments to shop is empty", function () {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items.length).to.equal(0);
  });

});
