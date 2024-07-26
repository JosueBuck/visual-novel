namespace Template {

    export function slideAnimation({
      _xStart,
      _xEnd,
      _yStart,
      _yEnd,
      _duration
    }:{
      _xStart: number,
      _xEnd: number,
      _yStart: number,
      _yEnd: number,
      _duration?: number

    }): ƒS.AnimationDefinition {
      return {
        start: {
          translation: ƒS.positionPercent(_xStart, _yStart),
          color: ƒS.Color.CSS("white", 1),
        },
        end: {
          translation: ƒS.positionPercent(_xEnd, _yEnd),
          color: ƒS.Color.CSS("white", 1)
        },
        duration: _duration,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
      };
    }

    export function colorAnimation({
      _startColor,
      _endColor,
      _duration
    }:{
      _startColor: ƒS.Color,
      _endColor: ƒS.Color,
      _duration: number
    }): ƒS.AnimationDefinition {
      return {
        start: {
          color: _startColor,
        },
        end: {
          color: _endColor
        },
        duration: _duration,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
      };
    }

}
