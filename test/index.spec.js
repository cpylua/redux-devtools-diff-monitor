import {expect} from 'chai';
import React from 'react';
import {findDOMNode} from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ManifestComponent from '../src/index';

describe('ManifestComponent', () => {

  it('should show actions', () => {

    const element = React.createElement(ManifestComponent, {
      computedStates: [{}, {}],
      currentStateIndex: 0,
      stagedActions: [{}, {}],
      skippedActions: {},
      reset: () => {},
      commit: () => {},
      rollback: () => {},
      sweep: () => {},
      toggleAction: () => {},
      jumpToState: () => {}
    });

    const rendered = TestUtils.renderIntoDocument(element);
    expect(
        findDOMNode(rendered).querySelectorAll('.manifest-action-component')
    ).to.have.length(2);
  });
});