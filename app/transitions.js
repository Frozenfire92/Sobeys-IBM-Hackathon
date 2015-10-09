export default function(){
  this.transition(
    this.fromRoute('login'),
    this.toRoute('dashboard'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('dashboard'),
    this.toRoute('dashboard.kiosks.index'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('dashboard.kiosks.index'),
    this.toRoute('dashboard.kiosks.kiosk'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('dashboard.index'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('dashboard.performance.index'),
    this.toRoute('dashboard.performance.performance'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('dashboard.kiosks'),
    this.toRoute('dashboard.performance'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  this.transition(
    this.fromRoute('dashboard.kiosks'),
    this.toRoute('dashboard.feedback'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  this.transition(
    this.fromRoute('dashboard.performance'),
    this.toRoute('dashboard.feedback'),
    this.use('toUp'),
    this.reverse('toDown')
  );
}
