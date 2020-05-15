import React from 'react';
import PropTypes from 'prop-types';

import style from 'PVWStyle/ReactWidgets/AnnotationEditorWidget.mcss';

import CollapsibleWidget from '../../CollapsibleWidget';
import SelectionEditorWidget from '../../SelectionEditorWidget';
import ScoreSelector from '../ScoreSelector';

export default function render(props) {
  return (
    <div className={style.verticalContainer}>
      <section className={style.lineContainer}>
        <label className={style.nameLabel}>Name</label>
        <input
          type="text"
          name="name"
          className={style.nameInput}
          value={props.annotation.name}
          onChange={props.onAnnotationChange}
          onBlur={props.onAnnotationChange}
        />
      </section>
      <SelectionEditorWidget
        className={style.flexItem}
        selection={props.annotation.selection}
        ranges={props.ranges}
        getLegend={props.getLegend}
        onChange={props.onSelectionChange}
      />

      <section className={style.lineContainerSpaceBetween}>
        <section className={style.lineContainer}>
          <label className={style.label}>Score</label>
          <ScoreSelector
            score={props.annotation.score[0]}
            scores={props.scores}
            name="0"
            onChange={props.onScoreChange}
            horizontal
          />
        </section>
        <section>
          <label className={style.label}>Weight</label>
          <input
            className={style.weightInput}
            type="number"
            value={props.annotation.weight}
            min="1"
            max="10"
            name="weight"
            onChange={props.onAnnotationChange}
            onBlur={props.onAnnotationChange}
          />
        </section>
      </section>

      <section className={style.lineContainerSpaceBetween}>
        <CollapsibleWidget title="Rationale" open={props.rationaleOpen}>
          <textarea
            className={style.textBox}
            name="rationale"
            rows="5"
            value={props.annotation.rationale}
            onChange={props.onAnnotationChange}
            onBlur={props.onAnnotationChange}
          />
        </CollapsibleWidget>
      </section>
    </div>
  );
}

render.propTypes = {
  annotation: PropTypes.object,
  scores: PropTypes.array,
  ranges: PropTypes.object,
  getLegend: PropTypes.func,
  rationaleOpen: PropTypes.bool,
  // showUncertainty: PropTypes.bool,

  onSelectionChange: PropTypes.func,
  onAnnotationChange: PropTypes.func,
  onScoreChange: PropTypes.func,
};

render.defaultProps = {
  rationaleOpen: false,
  // showUncertainty: true,

  annotation: undefined,
  scores: undefined,
  ranges: undefined,
  getLegend: undefined,
  onSelectionChange: undefined,
  onAnnotationChange: undefined,
  onScoreChange: undefined,
};
